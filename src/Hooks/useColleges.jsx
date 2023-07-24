import { useQuery } from "@tanstack/react-query";

const useColleges = () => {
    const { data: colleges = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['colleges'],
        queryFn: async () => {
            const res = await fetch('https://college-bay-server-t-0-n-m-0-y.vercel.app/colleges')
            return res.json();
        },
    })
    return [colleges, refetch, loading]
};

export default useColleges;