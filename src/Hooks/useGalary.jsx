import { useQuery } from "@tanstack/react-query";

const useGalary = () => {
    const { data: images = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['galary'],
        queryFn: async () => {
            const res = await fetch('https://college-bay-server-t-0-n-m-0-y.vercel.app/galary')
            return res.json();
        },
    })
    return [images, refetch, loading]
};

export default useGalary;