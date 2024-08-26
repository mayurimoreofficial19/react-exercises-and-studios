export default function BookList() {
  let pageTitle = "Must-Read Books for 2024";
  let book1 =
    "https://m.media-amazon.com/images/I/41lJNXRfFdL._SY445_SX342_.jpg";
  let book2 =
    "https://m.media-amazon.com/images/I/41qqSRuzrBL._SY445_SX342_.jpg";
  let book3 =
    "https://m.media-amazon.com/images/I/41GNuyCLkpL._SY445_SX342_.jpg";

  return (
    <div>
      <h3>Must-Read Books for 2024</h3>
      <img src={book1} alt="you become what you think" />
      <img src={book2} alt="The mind of the leader" />
      <img src={book3} alt="The universe always has a plan" />
    </div>
  );
}
