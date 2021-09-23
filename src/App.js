import "./styles.css";
import { PrimaryButton } from "./components/atom/button/PrimaryButton";
import { SecondaryButton } from "./components/atom/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organism/user/UserCard";

const user = {
  name: "太郎",
  image: "https://source.unsplash.com/FU3vZToCZQ4",
  email: "1234@mail.com",
  phone: "000-1111-2222",
  company: {
    name: "ABC会社"
  },
  website: "https://google.com"
};
export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
