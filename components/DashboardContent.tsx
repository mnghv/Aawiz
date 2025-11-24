'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { RefreshCw, FileText, Loader2 } from 'lucide-react';

interface Post {
  id: number
  title: string
  body: string
  userId: number
}

export function DashboardContent() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
      if (!response.ok) {
        throw new Error('Failed to fetch posts')
      }
      const data = await response.json()
      setPosts(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="inline-flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 animate-spin text-blue-700 dark:text-sky-400" />
          <p className="text-xl font-semibold text-blue-700 dark:text-sky-400">Loading posts...</p>
          <div className="w-32 h-1 bg-blue-200 dark:bg-sky-900/50 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 dark:from-sky-500 dark:to-sky-300 animate-pulse" style={{ width: '60%' }} />
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <Card>
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400 mb-4">Error: {error}</p>
          <Button onClick={fetchPosts}>Retry</Button>
        </div>
      </Card>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 dark:text-sky-300 mb-2">Posts from API</h2>
          <p className="text-slate-600 dark:text-sky-200/70">Showing {posts.length} posts</p>
        </div>
        <Button onClick={fetchPosts} variant="outline" className="gap-2 group">
          <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
          Refresh
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Card 
            key={post.id} 
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 dark:from-sky-500 dark:to-sky-600 shadow-md flex-shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold line-clamp-2 text-slate-800 dark:text-sky-300 leading-tight">
                {post.title}
              </h3>
            </div>
            <p className="text-slate-600 dark:text-sky-200/80 line-clamp-3 mb-4 leading-relaxed">
              {post.body}
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-blue-200/50 dark:border-sky-500/20">
              <div className="flex gap-3 text-xs">
                <span className="px-2 py-1 rounded-md bg-blue-100 dark:bg-sky-900/30 text-blue-700 dark:text-sky-300 font-medium">
                  ID: {post.id}
                </span>
                <span className="px-2 py-1 rounded-md bg-blue-100 dark:bg-sky-900/30 text-blue-700 dark:text-sky-300 font-medium">
                  User: {post.userId}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-slate-800 dark:to-slate-800/50 border-2 border-blue-200 dark:border-sky-500/30 rounded-xl backdrop-blur-sm shadow-lg">
        <p className="text-sm text-blue-900 dark:text-sky-300">
          <strong className="font-semibold">API Source:</strong>{' '}
          <a 
            href="https://jsonplaceholder.typicode.com/posts" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-blue-700 dark:hover:text-sky-200 transition-colors"
          >
            JSONPlaceholder
          </a>
        </p>
      </div>
    </div>
  )
}

