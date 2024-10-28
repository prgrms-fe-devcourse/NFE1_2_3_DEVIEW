import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
type HeaderUserModalProps = {
  toggleUserIconModal: () => void;
};

export const HeaderUserModal = ({ toggleUserIconModal }: HeaderUserModalProps) => {
  return (
    <div className="absolute top-8 z-50 mt-2 w-20 max-w whitespace-pre rounded border border-solid border-lightgray bg-white-pure shadow md:top-16 md:w-36 md:translate-x-16 md:whitespace-nowrap">
      <div className="py-2 text-gray">
        <Link
          className="text-10 block w-full border-b border-solid border-lightgray px-4 py-2 flex-center hover:opacity-50 md:text-20"
          to="/mypage"
          onClick={toggleUserIconModal}
        >
          <CiUser className="hidden md:block md:h-6 md:w-6" />
          마이페이지
        </Link>

        <button
          className="text-10 block w-full px-4 py-2 flex-center hover:opacity-50 md:text-20"
          onClick={toggleUserIconModal}
        >
          <IoIosLogOut className="mr-1 hidden md:block" />
          로그아웃
        </button>
      </div>
    </div>
  );
};