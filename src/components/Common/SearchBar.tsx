export const SearchBar = () => {
  return (
    <div className="relative w-full">
      <input type="text" placeholder="검색어를 입력해주세요" className="h-11 pr-10" />
      <button className="absolute right-4 top-1/2 -translate-y-1/2 transform">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
          <path
            fill="#000"
            d="m20.267 21-6.3-6.3a6.096 6.096 0 0 1-3.8 1.3c-1.817 0-3.354-.63-4.613-1.887-1.258-1.259-1.887-2.796-1.887-4.613 0-1.817.629-3.354 1.887-4.612C6.813 3.629 8.35 3 10.167 3c1.816 0 3.354.63 4.612 1.888 1.259 1.258 1.888 2.795 1.888 4.612a6.094 6.094 0 0 1-1.3 3.8l6.3 6.3-1.4 1.4Zm-10.1-7c1.25 0 2.312-.438 3.187-1.313.875-.874 1.313-1.937 1.313-3.187 0-1.25-.438-2.313-1.313-3.188S11.417 5 10.167 5c-1.25 0-2.313.438-3.188 1.313S5.667 8.25 5.667 9.5c0 1.25.437 2.313 1.312 3.188.875.874 1.938 1.312 3.188 1.312Z"
          />
        </svg>
      </button>
    </div>
  );
};