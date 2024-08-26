function HobbyLinks() {
  const hobbyLinks = [
    { name: "baking", url: "https://sallysbakingaddiction.com/" },
    {
      name: "Photography Blog",
      url: "https://www.photographyblog.com",
    },
    { name: "Gardening Tips", url: "https://www.gardeners.com" },
  ];

  return (
    <div>
      <h2>Hobby Links</h2>
      <ul>
        hobbyLinks.map(link,index) => (
        <li key={index}>
          <a href={HobbyLinks.url} target="_blank" rel="no referrer">
            {link.name}
          </a>
        </li>
        )
      </ul>
    </div>
  );
}

export default HobbyLinks;
