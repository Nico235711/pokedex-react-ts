import '../styles/Loading.css'
export const ArrowUp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M18 11l-6 -6" /><path d="M6 11l6 -6" /></svg>
)


export const Loading = () => (
  <svg
    className="container"
    viewBox="0 0 40 40"
    height="40"
    width="40"
  >
    <circle
      className="track"
      cx="20"
      cy="20"
      r="17.5"
      pathLength="100"
      strokeWidth="5px"
      fill="none"
    />
    <circle
      className="car"
      cx="20"
      cy="20"
      r="17.5"
      pathLength="100"
      strokeWidth="5px"
      fill="none"
    />
  </svg>
)
