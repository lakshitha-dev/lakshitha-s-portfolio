import { useState, useEffect } from 'react';
import type { MediumArticle } from '../data';

export function useMediumArticles() {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        if (import.meta.env.DEV) {
          const res = await fetch('/medium-feed');
          const text = await res.text();
          const parser = new DOMParser();
          const xml = parser.parseFromString(text, 'text/xml');
          const items = Array.from(xml.querySelectorAll('item')).slice(0, 4);
          const parsed: MediumArticle[] = items.map((item) => {
            const title = item.querySelector('title')?.textContent || '';
            const pubDate = item.querySelector('pubDate')?.textContent || '';
            const link = item.querySelector('link')?.nextSibling?.textContent || item.querySelector('link')?.textContent || '';
            const content = item.getElementsByTagNameNS('*', 'encoded')[0]?.textContent || '';
            const description = content.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 160) + '\u2026';
            const thumbnail = content.match(/<img[^>]+src="([^"]+)"/)?.[1] || '';
            const categories = Array.from(item.querySelectorAll('category'))
              .map((cat) => cat.textContent || '')
              .filter(Boolean)
              .slice(0, 3);
            return { title, pubDate, link, thumbnail, description, categories };
          });
          setArticles(parsed);
        } else {
          const res = await fetch(`${import.meta.env.BASE_URL}medium-articles.json`);
          const data: MediumArticle[] = await res.json();
          setArticles(data);
        }
      } catch (err) {
        console.error('Failed to fetch Medium articles:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);

  return { articles, loading };
}
