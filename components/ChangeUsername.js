import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = () => {
    const username = prompt(
      `Enter your new Username (current: ${user.getUsername()})`
    );

    if (!username) return;

    setUserData({
      username,
    });
  };

  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        className="hover:text-pink-700"
        disabled={isUserUpdating}
        onClick={setUsername}
      >
        Change your Username
      </button>
    </div>
  );
}

export default ChangeUsername;
