'use client';

import { useState, useEffect, useMemo } from 'react';
import { supabase } from '@/lib/supabase';

// Supabase 데이터를 가져오는 커스텀 훅 예제
export function useSupabaseData<T = any>(
  table: string,
  options?: {
    select?: string;
    filter?: any;
  }
) {
  const [data, setData] = useState<T[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  // options를 안정적인 값으로 메모이제이션
  const selectValue = options?.select || '*';
  const filterValue = useMemo(() => options?.filter, [options?.filter]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        let query = supabase.from(table).select(selectValue);

        if (filterValue) {
          Object.entries(filterValue).forEach(([key, value]) => {
            query = query.eq(key, value);
          });
        }

        const { data: result, error: fetchError } = await query;

        if (fetchError) throw fetchError;

        setData(result as T[]);
        setError(null);
      } catch (err) {
        setError(err as Error);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [table, selectValue, filterValue]);

  return { data, error, loading };
}

// 실시간 구독 훅 예제
export function useSupabaseSubscription<T = any>(
  table: string,
  callback: (payload: T) => void
) {
  useEffect(() => {
    const channel = supabase
      .channel(`public:${table}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: table,
        },
        (payload) => {
          callback(payload.new as T);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table]);
}

