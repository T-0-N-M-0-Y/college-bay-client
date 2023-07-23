import { useQuery } from '@tanstack/react-query';

const useReviews = () => {

    const { data: reviews = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reviews')
            return res.json();
        },
    })
    return [reviews, refetch, loading]
};

export default useReviews;