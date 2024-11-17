import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

interface FetchAxiosProps {
  name: string;
  receptor: string;
  body: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setEmailSent: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FetchAxios = async ({
  name,
  receptor,
  body,
  setLoading,
  setEmailSent,
  setError,
}: FetchAxiosProps) => {
  try {
    setLoading(true);

    const queryString = `name=${encodeURIComponent(
      name
    )}&receptor=${encodeURIComponent(receptor)}&subject=${encodeURIComponent(
      'Hiring/Partnership opportunities'
    )}&body=${encodeURIComponent(body)}`;

    const response = await axios.post(
      `${baseURL}?${queryString}`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    setLoading(false);
    setEmailSent(true);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      setError(true);
      setLoading(false);
    }
  }
};
