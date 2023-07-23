import { useQuery } from "@tanstack/react-query";

const useGalary = () => {
    const { data: images = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['galary'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/galary')
            return res.json();
        },
    })
    return [images, refetch, loading]
};

export default useGalary;