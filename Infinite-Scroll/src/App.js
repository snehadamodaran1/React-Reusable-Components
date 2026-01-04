// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

import React, { useState, useEffect, useRef, useCallback } from "react";

// Simulated API: returns page of items with a small delay
const fetchItems = (page, perPage = 10) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const start = page * perPage;
      const items = Array.from({ length: perPage }, (_, i) => ({
        id: start + i + 1,
        text: `Item ${start + i + 1}`,
      }));
      // Simulate end after 5 pages
      const hasMore = page < 4;
      resolve({ items, hasMore });
    }, 600);
  });

export default function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Load first page on mount
  useEffect(() => {
    loadPage(0);
  }, []);

  const loadPage = useCallback(
    async (p) => {
      if (loading) return;
      setLoading(true);
      try {
        const res = await fetchItems(p);
        setItems((prev) => [...prev, ...res.items]);
        setHasMore(res.hasMore);
        setPage(p);
      } finally {
        setLoading(false);
      }
    },
    [loading]
  );

  const observerRef = useRef();
  const lastItemRef = useCallback(
    (node) => {
      if (loading) return;
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            loadPage(page + 1);
          }
        },
        { rootMargin: "200px" }
      );
      if (node) observerRef.current.observe(node);
    },
    [loading, hasMore, loadPage, page]
  );

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h2>Infinite Scroll — Demo</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li
              key={item.id}
              ref={isLast ? lastItemRef : null}
              style={{
                border: "1px solid #ddd",
                padding: "12px 16px",
                marginBottom: 8,
                borderRadius: 6,
                background: "#fff",
              }}
            >
              {item.text}
            </li>
          );
        })}
      </ul>

      {loading && <p>Loading…</p>}
      {!hasMore && <p style={{ color: "#666" }}>No more items.</p>}
    </div>
  );
}
