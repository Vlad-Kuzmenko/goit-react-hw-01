import Section from "./components/Section/Section.jsx";
import Container from "./components/Container/Container.jsx";
import Profile from "./components/Profile/Profile.jsx";
import FriendList from "./components/FriendList/FriendList.jsx";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

const App = () => {
  return (
    <>
      <Section>
        <Container>
          <Profile {...userData} />
        </Container>
      </Section>
      <Section>
        <Container>
          <FriendList friends={friends} />
        </Container>
      </Section>
      <Section>
        <Container>
          <TransactionHistory items={transactions} />
        </Container>
      </Section>
    </>
  );
};

export default App;
