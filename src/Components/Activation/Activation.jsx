import React from 'react';
import { toast } from 'react-toastify/dist';

const Activation = () => {
  const [error, setError] = useState(false);
  const cookieValue = Cookies.get('activation');
  const cookieOptions = JSON.parse(cookieValue);
  useEffect(() => {
    if (cookieOptions.userId || cookieOptions.tokenId) {
      const activationEmail = async () => {
        try {
          const res = await axios.post(
            `/verify/${cookieOptions.userId}/${cookieOptions.userId}`
          );
          console.log(res.data.message);
        } catch (error) {
          toast.error(error.response.data.message);
          setError(true);
        }
      };
      activationEmail();
    }
  }, [activation_token]);
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {error ? (
        <p>Your token is expired</p>
      ) : (
        <p>Your account has been created succesfull</p>
      )}
    </div>
  );
};

export default Activation;
