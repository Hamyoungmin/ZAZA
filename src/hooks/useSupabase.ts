'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

// Supabase 데이터를 가져오는 커스텀 훅 예제
export function useSupabaseData<T>(
  table: string,
  options?: {
    select?: string;
    filter?: any;
  }
) {
  const [data, setData] = useState<T[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        let query = supabase.from(table).select(options?.select || '*');

        if (options?.filter) {
          Object.entries(options.filter).forEach(([key, value]) => {
            query = query.eq(key, value);
          });
        }

        const { data: result, error: fetchError } = await query;

        if (fetchError) throw fetchError;

        setData(result);
        setError(null);
      } catch (err) {
        setError(err as Error);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [table, options?.select, JSON.stringify(options?.filter)]);

  return { data, error, loading };
}

// 실시간 구독 훅 예제
export function useSupabaseSubscription<T>(
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
  }, [table, callback]);
}

