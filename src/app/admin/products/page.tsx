'use client';

import { useState, useEffect } from 'react';
import styles from './products.module.css';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  duration: string;
  stock: number;
  status: '판매중' | '품절' | '중단';
  sales_count: number;
  image_url: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('전체');

  // Supabase에서 상품 데이터 가져오기
  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterStatus]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (filterStatus !== '전체') params.append('status', filterStatus);
      
      const response = await fetch(`/api/products?${params.toString()}`);
      const data = await response.json();
      
      if (response.ok) {
        setProducts(data);
      } else {
        console.error('Failed to fetch products:', data.error);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ko-KR').format(amount) + '원';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case '판매중':
        return styles.statusActive;
      case '품절':
        return styles.statusSoldOut;
      case '중단':
        return styles.statusStopped;
      default:
        return '';
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    try {
      const response = await fetch(`/api/products?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('상품이 삭제되었습니다.');
        fetchProducts();
      } else {
        alert('삭제에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('삭제 중 오류가 발생했습니다.');
    }
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>로딩 중...</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>여행 상품 관리</h1>
          <p className={styles.subtitle}>등록된 여행 상품을 관리하세요</p>
        </div>
        <button className={styles.addButton}>+ 상품 등록</button>
      </div>

      {/* 필터 및 검색 */}
      <div className={styles.filterSection}>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="상품명으로 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.filters}>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="전체">전체 상태</option>
            <option value="판매중">판매중</option>
            <option value="품절">품절</option>
            <option value="중단">중단</option>
          </select>
        </div>
      </div>

      {/* 상품 목록 */}
      <div className={styles.productsGrid}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.productImage}>
              <img src={product.image_url} alt={product.name} />
              <span className={`${styles.statusBadge} ${getStatusColor(product.status)}`}>
                {product.status}
              </span>
            </div>
            <div className={styles.productInfo}>
              <span className={styles.category}>{product.category}</span>
              <h3 className={styles.productName}>{product.name}</h3>
              <div className={styles.productDetails}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>기간</span>
                  <span className={styles.detailValue}>{product.duration}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>재고</span>
                  <span className={styles.detailValue}>{product.stock}석</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>판매</span>
                  <span className={styles.detailValue}>{product.sales_count}건</span>
                </div>
              </div>
              <div className={styles.priceSection}>
                <span className={styles.price}>{formatCurrency(product.price)}</span>
              </div>
              <div className={styles.actionButtons}>
                <button className={styles.editButton}>수정</button>
                <button 
                  className={styles.deleteButton}
                  onClick={() => handleDelete(product.id)}
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className={styles.emptyState}>
          <p>검색 결과가 없습니다.</p>
        </div>
      )}
    </div>
  );
}

