const Pagination = ({ rowsPerPage, totalRows }) => {
  const numberOfPages = Math.ceil(totalRows / rowsPerPage);
  const pages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }
  console.log(pages);
  return (
    <ul>
      {pages.map((page) => (
        <li key={page}>{page}</li>
      ))}
    </ul>
  );
};

export default Pagination;
