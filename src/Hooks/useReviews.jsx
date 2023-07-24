import { useQuery } from '@tanstack/react-query';

const useReviews = () => {

    const { data: reviews = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await fetch('https://college-bay-server-t-0-n-m-0-y.vercel.app/reviews')
            return res.json();
        },
    })
    return [reviews, refetch, loading]
};

export default useReviews;