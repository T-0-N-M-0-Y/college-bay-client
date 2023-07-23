import { useQuery } from "@tanstack/react-query";

const useColleges = () => {
    const { data: colleges = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['colleges'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/colleges')
            return res.json();
        },
    })
    return [colleges, refetch, loading]
};

export default useColleges;