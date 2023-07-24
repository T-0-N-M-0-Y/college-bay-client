import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../components/Provider/AuthProvider';

const useAppliedCollege = () => {

    const {user, loading} = useContext(AuthContext);

    const { data: appliedColleges = [], refetch } = useQuery({
        queryKey: ['appliedColleges'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appliedColleges/email?email=${user.email}`)
            return res.json();
        },
    })
    return [appliedColleges, refetch, loading]
};

export default useAppliedCollege;