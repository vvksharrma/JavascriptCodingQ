// React Query is a popular data fetching and caching library for React applications. It provides a simple and efficient
// way to manage data fetching, caching, and re-fetching in your React applications.

// 1.Declarative Data Fetching with useQuery:
// React Query simplifies data fetching from APIs or servers using the useQuery hook. It automatically manages caching, re-fetching, and stale data handling.
// Example:
import { useQuery } from 'react-query';

const { isLoading, error, data } = useQuery('todos', fetchTodos);

if (isLoading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;

return (
  <ul>
    {data.map(todo => (
      <li key={todo.id}>{todo.title}</li>
    ))}
  </ul>
);
// 2.Automatic Caching and Stale Data Management:

// React Query automatically caches data and manages the lifecycle of cached data, including re-fetching when necessary. It supports various caching strategies like cache-and-network and stale-while-revalidate.
// Example of cache-and-network strategy:

const { isLoading, data } = useQuery('todos', fetchTodos, {
  cacheTime: 60000, // Cache for 1 minute
  staleTime: 30000, // Allow data to be stale for 30 seconds
  refetchOnWindowFocus: false, // Disable auto refetch on window focus
});

// 3.Mutations with useMutation:

// React Query provides useMutation for handling server-side mutations (create, update, delete operations). It manages loading states, optimistic updates, and error handling.
// Example:
import { useMutation } from 'react-query';

const { mutate, isLoading } = useMutation(updateTodo, {
  onSuccess: () => {
    queryClient.invalidateQueries('todos');
  },
});

const handleUpdate = () => {
  mutate({ id: todo.id, updatedData });
};
// Optimistic Updates:

// React Query supports optimistic updates, allowing UI updates to happen optimistically before the mutation is confirmed by the server. This provides a smoother user experience.
// Example:

const { mutate } = useMutation(
  addTodo,
  {
    onMutate: newTodo => {
      // Optimistically update UI
      setTodos(prevTodos => [...prevTodos, newTodo]);
    },
    onError: (error, newTodo, rollback) => {
      // Rollback UI changes on error
      rollback();
    },
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  }
);
// Pagination and Infinite Querying:

// React Query provides built-in support for pagination and infinite scrolling using the useInfiniteQuery hook. It handles loading additional pages of data seamlessly.
// Example:
import { useInfiniteQuery } from 'react-query';

const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
  'todos',
  ({ pageParam = 1 }) => fetchTodos(pageParam),
  {
    getNextPageParam: (lastPage, allPages) => lastPage.nextPageParam,
  }
);

const loadMore = () => {
  fetchNextPage();
};
// Server-Side Error Handling:

// React Query provides robust error handling mechanisms, including retry logic, global error handling, and customizable error boundaries to handle server-side errors gracefully.
// Example:
const { error, isError, refetch } = useQuery('todos', fetchTodos, {
  retry: 3, // Retry up to 3 times on error
  retryDelay: 1000, // Delay between retries (1 second)
  onError: (error) => {
    // Custom error handling
    console.error('Error fetching data:', error);
  },
});
// Query Keys and Dependencies:

// React Query uses query keys to identify queries and manage their dependencies. It automatically invalidates queries based on dependencies, ensuring data consistency.
// Example:
const queryKey = ['todos', { userId: 1 }];
const { isLoading, data } = useQuery(queryKey, fetchTodos);
// Optimized Performance:

// React Query optimizes performance by reducing unnecessary re-fetching, leveraging caching strategies, and providing fine-grained control over data fetching and synchronization.