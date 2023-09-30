import './UserProfile.scss';
import useFetch from '../../hooks/useFetch';
import LoadingPage from '../../Assets/LoadingPage/LoadingPage';
import './UserProfile.scss';
import { BiHomeAlt, BiSolidDownload } from 'react-icons/bi';
import bgSvg from '../../Media/register-bg.svg';
import dayjs from 'dayjs';
import { FaAngleRight, FaUserEdit } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { RiLockPasswordLine } from 'react-icons/ri';
import { saveAs } from 'file-saver';
import { FiLogOut } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useCallback } from 'react';
import axios from 'axios';
function UserProfile() {
  const { data, loading, error } = useFetch('/users/user/profile');
  const navigate = useNavigate();

  const downLoadFile = () => {
    saveAs(data.img, 'walknjoy_picture.png');
  };

  // !logout
  const handleLogout = useCallback(async () => {
    console.log('logout olundu');
    try {
      const res = await axios.post('/auth/logout', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status === 200) {
        localStorage.removeItem('img');
        navigate('/');
        toast.success(res.data.success);
      }
    } catch (error) {
      toast.error(error.response.data.error.error);
    }
  }, [navigate]);

  if (error) {
    return <div>Error: Unable to fetch user profile data.</div>;
  }
  return (
    <>
      {loading ? (
        <LoadingPage initial={true} />
      ) : (
        <div className="profile_page">
          <div className="container">
            <div className="bg-svg">
              <img src={bgSvg} alt="register bg" />
            </div>

            <div className="row">
              <div className="col-12 col-lg-4 col-md-5">
                <div className="left-wrapper">
                  <div className="profile-some-information">
                    <figure>
                      <img src={data?.img} alt="" />
                      <div className="downloadIcon">
                        <button onClick={downLoadFile}>
                          <BiSolidDownload />
                        </button>
                      </div>
                    </figure>
                    <h3 className="username">{data?.username}</h3>
                    <span className="email-side">{data?.email}</span>
                    <p className="date">
                      Created date:
                      <span>{dayjs(data?.createdAt).format('D.MM.YYYY')}</span>
                    </p>
                    <p className="uptadet-date">
                      Uptaded date:{' '}
                      <span>{dayjs(data?.updatedAt).format('D.MM.YYYY')}</span>
                    </p>
                  </div>
                  <div className="profile-some-information routers">
                    <ul className="profile_router_links">
                      <li>
                        <NavLink to={`/user-profile/${data.username}`}>
                          <CgProfile />
                          <span>Profile</span>
                          <FaAngleRight className="active-right" />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/user-profile/information">
                          <FaUserEdit />
                          <span>Edit information</span>
                          <FaAngleRight className="active-right" />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/user-profile/password">
                          <RiLockPasswordLine />
                          <span>Password</span>
                          <FaAngleRight className="active-right" />
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-7 col-md-7">
                <div className="right-wrapper">
                  <div className="right-wrapper-content">
                    <div className="information-title">
                      <h2>Welcome to the information</h2>
                      <p>Check or change your infromation as you want</p>
                    </div>
                    <div className="all_fields">
                      <Outlet />
                    </div>
                  </div>
                  <div className="logout_or_home">
                    <div className="logout">
                      <button onClick={handleLogout}>
                        Logout <FiLogOut />
                      </button>
                    </div>
                    <div className="home_icon">
                      <Link to="/">
                        {' '}
                        Home
                        <BiHomeAlt />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserProfile;
