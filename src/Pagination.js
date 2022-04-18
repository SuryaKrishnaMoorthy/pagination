const Pagination = ({ rowsPerPage, totalRows, paginate }) => {
  const numberOfPages = Math.ceil(totalRows / rowsPerPage);
  const pages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }

  return (
    <ul>
      {pages.map((page) => (
        <li key={page} onClick={() => paginate(page)}>
          {page}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
