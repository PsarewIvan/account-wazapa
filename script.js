'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const NONE_CLASS = 'none';

    const ICONS = {
        OK: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14.531 5.031l-8 8a.75.75 0 0 1-.531.221.75.75 0 0 1-.531-.221l-3.5-3.5a.75.75 0 0 1-.22-.531.75.75 0 0 1 .22-.531.75.75 0 0 1 .531-.22.75.75 0 0 1 .531.22L6 11.438l7.469-7.468a.75.75 0 0 1 1.063 0 .75.75 0 0 1 0 1.063l-.001-.001z" fill="#1eae53"/></svg>`,
        RECORD: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.25a6.75 6.75 0 0 0-6.236 4.167 6.75 6.75 0 0 0 1.463 7.356 6.75 6.75 0 0 0 7.356 1.463A6.75 6.75 0 0 0 14.75 8 6.76 6.76 0 0 0 8 1.25zm0 12a5.25 5.25 0 0 1-4.85-3.241 5.25 5.25 0 0 1 1.138-5.721 5.25 5.25 0 0 1 5.721-1.138A5.25 5.25 0 0 1 13.25 8c-.002 1.392-.555 2.726-1.539 3.711S9.392 13.249 8 13.25zm2.5-7v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75z" fill="#e61818"/></svg>`,
        SIGN: `<svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M15 27a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1 1 1 0 0 1-1 1H7v20h7a1 1 0 0 1 1 1zm13.708-11.707l-5-5a1 1 0 0 0-1.415 0 1 1 0 0 0 0 1.415L25.586 15H14a1 1 0 0 0-1 1 1 1 0 0 0 1 1h11.586l-3.294 3.293a1 1 0 0 0 0 1.415 1 1 0 0 0 1.415 0l5-5a1 1 0 0 0 .293-.707 1 1 0 0 0-.293-.707z" fill="currentColor"/></svg>`,
        WARNING: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M15.016 11.631L9.551 2.139c-.158-.271-.385-.495-.657-.651S8.314 1.25 8 1.25s-.622.082-.894.238-.498.381-.657.651L.984 11.631c-.154.263-.235.562-.235.866s.081.603.235.866a1.77 1.77 0 0 0 1.551.887h10.931a1.77 1.77 0 0 0 1.549-.887c.154-.263.235-.561.235-.866s-.08-.603-.234-.866zm-1.3.981a.28.28 0 0 1-.25.137H2.534a.28.28 0 0 1-.25-.137c-.022-.035-.033-.075-.033-.117s.011-.082.033-.117L7.75 2.888c.027-.042.064-.076.108-.1s.093-.036.142-.036.099.012.142.036.081.058.108.1l5.465 9.492c.022.035.033.075.034.116s-.011.082-.032.117zM7.25 8.5v-2A.75.75 0 0 1 8 5.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-.75.75.75.75 0 0 1-.75-.75zM9 11a1 1 0 0 1-.617.924 1 1 0 0 1-1.09-.217 1 1 0 0 1-.217-1.09A1 1 0 0 1 8 10a1 1 0 0 1 1 1z" fill="#eba300"/></svg>`,
        ARROW: `<svg width="24" height="20" fill="none" viewBox="0 0 24 20"><path d="M23.708 10.708l-9 9a1 1 0 0 1-1.415 0 1 1 0 0 1 0-1.415L20.586 11H1a1 1 0 0 1-.707-.293A1 1 0 0 1 0 10a1 1 0 0 1 1-1h19.586l-7.294-7.292a1 1 0 0 1 0-1.415 1 1 0 0 1 1.415 0l9 9a1 1 0 0 1 .293.707 1 1 0 0 1-.293.707z" fill="#27262c" fill-opacity=".56" /></svg>`,
        ARROW_LEFT: `<svg fill="none" height="32" viewBox="0 0 32 32" width="32"><path d="m27.9998 16c0 .2652-.1053.5196-.2929.7071-.1875.1876-.4419.2929-.7071.2929h-19.58624l7.29374 7.2925c.0929.0929.1666.2032.2169.3246s.0762.2515.0762.3829-.0259.2615-.0762.3829-.124.2317-.2169.3246-.2032.1666-.3246.2169-.2515.0762-.3829.0762-.2615-.0259-.3829-.0762-.2317-.124-.3246-.2169l-8.99999-9c-.09298-.0929-.16674-.2032-.21706-.3246s-.07623-.2515-.07623-.3829.02591-.2615.07623-.3829.12408-.2317.21706-.3246l8.99999-8.99999c.1876-.18764.4421-.29306.7075-.29306s.5199.10542.7075.29306c.1877.18764.2931.44213.2931.7075 0 .26536-.1054.51986-.2931.7075l-7.29374 7.29249h19.58624c.2652 0 .5196.1054.7071.2929.1876.1875.2929.4419.2929.7071z" fill="currentColor"/></svg>`,
        FILE: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M20.031 7.719l-5.25-5.25a.75.75 0 0 0-.531-.219h-9a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-12a.75.75 0 0 0-.219-.531zM15 4.81l2.69 2.69H15V4.81zm3.75 15.44H5.25V3.75h8.25v4.5a.75.75 0 0 0 .75.75h4.5v11.25z" fill="#27262c" fill-opacity=".72"/></svg>`,
        RECEIPT: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6.75 9.75C6.75 9.55109 6.82902 9.36032 6.96967 9.21967C7.11032 9.07902 7.30109 9 7.5 9H16.5C16.6989 9 16.8897 9.07902 17.0303 9.21967C17.171 9.36032 17.25 9.55109 17.25 9.75C17.25 9.94891 17.171 10.1397 17.0303 10.2803C16.8897 10.421 16.6989 10.5 16.5 10.5H7.5C7.30109 10.5 7.11032 10.421 6.96967 10.2803C6.82902 10.1397 6.75 9.94891 6.75 9.75ZM7.5 13.5H16.5C16.6989 13.5 16.8897 13.421 17.0303 13.2803C17.171 13.1397 17.25 12.9489 17.25 12.75C17.25 12.5511 17.171 12.3603 17.0303 12.2197C16.8897 12.079 16.6989 12 16.5 12H7.5C7.30109 12 7.11032 12.079 6.96967 12.2197C6.82902 12.3603 6.75 12.5511 6.75 12.75C6.75 12.9489 6.82902 13.1397 6.96967 13.2803C7.11032 13.421 7.30109 13.5 7.5 13.5ZM21.75 5.25V19.5C21.7499 19.6278 21.7172 19.7535 21.6549 19.8651C21.5926 19.9768 21.5028 20.0706 21.394 20.1378C21.2853 20.2049 21.1611 20.2432 21.0334 20.2489C20.9057 20.2546 20.7787 20.2275 20.6644 20.1703L18 18.8381L15.3356 20.1703C15.2314 20.2225 15.1165 20.2496 15 20.2496C14.8835 20.2496 14.7686 20.2225 14.6644 20.1703L12 18.8381L9.33563 20.1703C9.23143 20.2225 9.11652 20.2496 9 20.2496C8.88348 20.2496 8.76857 20.2225 8.66437 20.1703L6 18.8381L3.33563 20.1703C3.22131 20.2275 3.09427 20.2546 2.96657 20.2489C2.83887 20.2432 2.71474 20.2049 2.60597 20.1378C2.49721 20.0706 2.40741 19.9768 2.34511 19.8651C2.28281 19.7535 2.25007 19.6278 2.25 19.5V5.25C2.25 4.85218 2.40804 4.47064 2.68934 4.18934C2.97064 3.90804 3.35218 3.75 3.75 3.75H20.25C20.6478 3.75 21.0294 3.90804 21.3107 4.18934C21.592 4.47064 21.75 4.85218 21.75 5.25ZM20.25 5.25H3.75V18.2869L5.66437 17.3287C5.76857 17.2766 5.88349 17.2495 6 17.2495C6.11651 17.2495 6.23143 17.2766 6.33563 17.3287L9 18.6619L11.6644 17.3287C11.7686 17.2766 11.8835 17.2495 12 17.2495C12.1165 17.2495 12.2314 17.2766 12.3356 17.3287L15 18.6619L17.6644 17.3287C17.7686 17.2766 17.8835 17.2495 18 17.2495C18.1165 17.2495 18.2314 17.2766 18.3356 17.3287L20.25 18.2869V5.25Z" fill="currentColor"/></svg>`,
        PICTURE: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M27 5H9C8.46957 5 7.96086 5.21071 7.58579 5.58579C7.21071 5.96086 7 6.46957 7 7V9H5C4.46957 9 3.96086 9.21071 3.58579 9.58579C3.21071 9.96086 3 10.4696 3 11V25C3 25.5304 3.21071 26.0391 3.58579 26.4142C3.96086 26.7893 4.46957 27 5 27H23C23.5304 27 24.0391 26.7893 24.4142 26.4142C24.7893 26.0391 25 25.5304 25 25V23H27C27.5304 23 28.0391 22.7893 28.4142 22.4142C28.7893 22.0391 29 21.5304 29 21V7C29 6.46957 28.7893 5.96086 28.4142 5.58579C28.0391 5.21071 27.5304 5 27 5ZM9 7H27V14.8438L25.7412 13.5863C25.5555 13.4005 25.335 13.2531 25.0923 13.1526C24.8497 13.052 24.5896 13.0003 24.3269 13.0003C24.0642 13.0003 23.8041 13.052 23.5614 13.1526C23.3187 13.2531 23.0982 13.4005 22.9125 13.5863L20.4125 16.0863L14.9125 10.5863C14.5375 10.2115 14.029 10.0009 13.4987 10.0009C12.9685 10.0009 12.46 10.2115 12.085 10.5863L9 13.6713V7ZM23 25H5V11H7V21C7 21.5304 7.21071 22.0391 7.58579 22.4142C7.96086 22.7893 8.46957 23 9 23H23V25ZM27 21H9V16.5L13.5 12L19.7075 18.2075C19.895 18.3949 20.1493 18.5002 20.4144 18.5002C20.6795 18.5002 20.9337 18.3949 21.1213 18.2075L24.3288 15L27 17.6725V21ZM20 10.5C20 10.2033 20.088 9.91332 20.2528 9.66665C20.4176 9.41997 20.6519 9.22771 20.926 9.11418C21.2001 9.00065 21.5017 8.97094 21.7926 9.02882C22.0836 9.0867 22.3509 9.22956 22.5607 9.43934C22.7704 9.64912 22.9133 9.91639 22.9712 10.2074C23.0291 10.4983 22.9993 10.7999 22.8858 11.074C22.7723 11.3481 22.58 11.5824 22.3334 11.7472C22.0867 11.912 21.7967 12 21.5 12C21.1022 12 20.7206 11.842 20.4393 11.5607C20.158 11.2794 20 10.8978 20 10.5Z" fill="currentColor"/></svg>`,
        VIDEO: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M20.555 13.1675L14.555 9.1675C14.4044 9.067 14.2293 9.00928 14.0484 9.00052C13.8675 8.99176 13.6877 9.03227 13.528 9.11774C13.3684 9.20321 13.2349 9.33043 13.1419 9.48581C13.0489 9.6412 12.9999 9.81891 13 10V18C12.9999 18.1811 13.0489 18.3588 13.1419 18.5142C13.2349 18.6696 13.3684 18.7968 13.528 18.8823C13.6877 18.9677 13.8675 19.0082 14.0484 18.9995C14.2293 18.9907 14.4044 18.933 14.555 18.8325L20.555 14.8325C20.6922 14.7412 20.8047 14.6175 20.8825 14.4722C20.9603 14.327 21.001 14.1648 21.001 14C21.001 13.8352 20.9603 13.673 20.8825 13.5278C20.8047 13.3825 20.6922 13.2588 20.555 13.1675ZM15 16.1313V11.875L18.1975 14L15 16.1313ZM27 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V21C3 21.5304 3.21071 22.0391 3.58579 22.4142C3.96086 22.7893 4.46957 23 5 23H27C27.5304 23 28.0391 22.7893 28.4142 22.4142C28.7893 22.0391 29 21.5304 29 21V7C29 6.46957 28.7893 5.96086 28.4142 5.58579C28.0391 5.21071 27.5304 5 27 5ZM27 21H5V7H27V21ZM29 26C29 26.2652 28.8946 26.5196 28.7071 26.7071C28.5196 26.8946 28.2652 27 28 27H4C3.73478 27 3.48043 26.8946 3.29289 26.7071C3.10536 26.5196 3 26.2652 3 26C3 25.7348 3.10536 25.4804 3.29289 25.2929C3.48043 25.1054 3.73478 25 4 25H28C28.2652 25 28.5196 25.1054 28.7071 25.2929C28.8946 25.4804 29 25.7348 29 26Z" fill="currentColor"/></svg>`,
        CROSS: `<svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M25.708 24.293a1 1 0 0 1 .293.707 1 1 0 0 1-.293.707 1 1 0 0 1-.707.293 1 1 0 0 1-.707-.293L16 17.414l-8.293 8.294a1 1 0 0 1-1.415 0 1 1 0 0 1 0-1.415L14.586 16 6.293 7.708a1 1 0 0 1 0-1.415 1 1 0 0 1 1.415 0L16 14.586l8.293-8.294a1 1 0 0 1 1.415 0 1 1 0 0 1 0 1.415L17.414 16l8.294 8.293z" fill="currentColor"/></svg>`,
        HOME: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M17.7071 12.2929C18.0976 12.6834 18.0976 13.3166 17.7071 13.7071L11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L8.29289 17.7071C7.90237 17.3166 7.90237 16.6834 8.29289 16.2929C8.68342 15.9024 9.31658 15.9024 9.70711 16.2929L11 17.5858L16.2929 12.2929C16.6834 11.9024 17.3166 11.9024 17.7071 12.2929Z" fill="currentColor"/><path d="M23.7071 13.7071C24.0976 13.3166 24.0976 12.6834 23.7071 12.2929C23.3166 11.9024 22.6834 11.9024 22.2929 12.2929L16.2929 18.2929C15.9024 18.6834 15.9024 19.3166 16.2929 19.7071C16.6834 20.0976 17.3166 20.0976 17.7071 19.7071L23.7071 13.7071Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16 2C4.471 2 2 4.471 2 16C2 27.529 4.471 30 16 30C27.529 30 30 27.529 30 16C30 4.471 27.529 2 16 2ZM4.5186 9.3826C4.1546 11.0204 4 13.1634 4 16C4 18.8366 4.1546 20.9795 4.5186 22.6174C4.87755 24.2325 5.41299 25.2313 6.09084 25.9092C6.76868 26.587 7.76746 27.1224 9.3826 27.4814C11.0204 27.8454 13.1634 28 16 28C18.8366 28 20.9795 27.8454 22.6174 27.4814C24.2325 27.1224 25.2313 26.587 25.9092 25.9092C26.587 25.2313 27.1224 24.2325 27.4814 22.6174C27.8454 20.9795 28 18.8366 28 16C28 13.1634 27.8454 11.0204 27.4814 9.3826C27.1224 7.76746 26.587 6.76868 25.9092 6.09084C25.2313 5.41299 24.2325 4.87755 22.6174 4.5186C20.9795 4.1546 18.8366 4 16 4C13.1634 4 11.0204 4.1546 9.3826 4.5186C7.76746 4.87755 6.76868 5.41299 6.09084 6.09084C5.41299 6.76868 4.87755 7.76746 4.5186 9.3826Z" fill="currentColor"/></svg>`,
        LIST: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M13 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V13C5 13.5304 5.21071 14.0391 5.58579 14.4142C5.96086 14.7893 6.46957 15 7 15H13C13.5304 15 14.0391 14.7893 14.4142 14.4142C14.7893 14.0391 15 13.5304 15 13V7C15 6.46957 14.7893 5.96086 14.4142 5.58579C14.0391 5.21071 13.5304 5 13 5ZM13 13H7V7H13V13ZM25 5H19C18.4696 5 17.9609 5.21071 17.5858 5.58579C17.2107 5.96086 17 6.46957 17 7V13C17 13.5304 17.2107 14.0391 17.5858 14.4142C17.9609 14.7893 18.4696 15 19 15H25C25.5304 15 26.0391 14.7893 26.4142 14.4142C26.7893 14.0391 27 13.5304 27 13V7C27 6.46957 26.7893 5.96086 26.4142 5.58579C26.0391 5.21071 25.5304 5 25 5ZM25 13H19V7H25V13ZM13 17H7C6.46957 17 5.96086 17.2107 5.58579 17.5858C5.21071 17.9609 5 18.4696 5 19V25C5 25.5304 5.21071 26.0391 5.58579 26.4142C5.96086 26.7893 6.46957 27 7 27H13C13.5304 27 14.0391 26.7893 14.4142 26.4142C14.7893 26.0391 15 25.5304 15 25V19C15 18.4696 14.7893 17.9609 14.4142 17.5858C14.0391 17.2107 13.5304 17 13 17ZM13 25H7V19H13V25ZM25 17H19C18.4696 17 17.9609 17.2107 17.5858 17.5858C17.2107 17.9609 17 18.4696 17 19V25C17 25.5304 17.2107 26.0391 17.5858 26.4142C17.9609 26.7893 18.4696 27 19 27H25C25.5304 27 26.0391 26.7893 26.4142 26.4142C26.7893 26.0391 27 25.5304 27 25V19C27 18.4696 26.7893 17.9609 26.4142 17.5858C26.0391 17.2107 25.5304 17 25 17ZM25 25H19V19H25V25Z" fill="currentColor"/></svg>`,
        FILES: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M28 6H4C3.46957 6 2.96086 6.21071 2.58579 6.58579C2.21071 6.96086 2 7.46957 2 8V24C2 24.5304 2.21071 25.0391 2.58579 25.4142C2.96086 25.7893 3.46957 26 4 26H28C28.5304 26 29.0391 25.7893 29.4142 25.4142C29.7893 25.0391 30 24.5304 30 24V8C30 7.46957 29.7893 6.96086 29.4142 6.58579C29.0391 6.21071 28.5304 6 28 6ZM28 8V11H4V8H28ZM28 24H4V13H28V24ZM26 21C26 21.2652 25.8946 21.5196 25.7071 21.7071C25.5196 21.8946 25.2652 22 25 22H21C20.7348 22 20.4804 21.8946 20.2929 21.7071C20.1054 21.5196 20 21.2652 20 21C20 20.7348 20.1054 20.4804 20.2929 20.2929C20.4804 20.1054 20.7348 20 21 20H25C25.2652 20 25.5196 20.1054 25.7071 20.2929C25.8946 20.4804 26 20.7348 26 21ZM18 21C18 21.2652 17.8946 21.5196 17.7071 21.7071C17.5196 21.8946 17.2652 22 17 22H15C14.7348 22 14.4804 21.8946 14.2929 21.7071C14.1054 21.5196 14 21.2652 14 21C14 20.7348 14.1054 20.4804 14.2929 20.2929C14.4804 20.1054 14.7348 20 15 20H17C17.2652 20 17.5196 20.1054 17.7071 20.2929C17.8946 20.4804 18 20.7348 18 21Z" fill="currentColor"/></svg>`,
        CHATS: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M21.1963 9.07375C20.2913 6.95494 18.6824 5.21364 16.6416 4.14422C14.6009 3.0748 12.2534 2.74287 9.99616 3.20455C7.73891 3.66623 5.71031 4.8932 4.25334 6.67802C2.79637 8.46284 2.0004 10.696 2 13V21.25C2 21.7141 2.18437 22.1592 2.51256 22.4874C2.84075 22.8156 3.28587 23 3.75 23H10.8337C11.6141 24.7821 12.8964 26.2984 14.5241 27.3638C16.1519 28.4293 18.0546 28.9978 20 29H28.25C28.7141 29 29.1592 28.8156 29.4874 28.4874C29.8156 28.1592 30 27.7141 30 27.25V19C29.9995 16.5553 29.1036 14.1955 27.4814 12.3666C25.8593 10.5376 23.6234 9.36619 21.1963 9.07375ZM4 13C4 11.4177 4.46919 9.87103 5.34824 8.55544C6.22729 7.23984 7.47672 6.21446 8.93853 5.60896C10.4003 5.00346 12.0089 4.84504 13.5607 5.15372C15.1126 5.4624 16.538 6.22432 17.6569 7.34314C18.7757 8.46197 19.5376 9.88743 19.8463 11.4393C20.155 12.9911 19.9965 14.5997 19.391 16.0615C18.7855 17.5233 17.7602 18.7727 16.4446 19.6518C15.129 20.5308 13.5823 21 12 21H4V13ZM28 27H20C18.5854 26.9984 17.1964 26.6225 15.974 25.9106C14.7516 25.1986 13.7394 24.1759 13.04 22.9463C14.4096 22.8041 15.7351 22.3804 16.9333 21.7017C18.1314 21.023 19.1763 20.104 20.0024 19.0023C20.8284 17.9006 21.4179 16.6401 21.7337 15.2998C22.0495 13.9595 22.0848 12.5684 21.8375 11.2137C23.5916 11.6277 25.1545 12.6218 26.273 14.035C27.3915 15.4482 28 17.1977 28 19V27Z" fill="currentColor"/></svg>`,
        CHAT_WITH_TEXT: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M21 14C21 14.2652 20.8946 14.5196 20.7071 14.7071C20.5196 14.8946 20.2652 15 20 15H12C11.7348 15 11.4804 14.8946 11.2929 14.7071C11.1054 14.5196 11 14.2652 11 14C11 13.7348 11.1054 13.4804 11.2929 13.2929C11.4804 13.1054 11.7348 13 12 13H20C20.2652 13 20.5196 13.1054 20.7071 13.2929C20.8946 13.4804 21 13.7348 21 14ZM20 17H12C11.7348 17 11.4804 17.1054 11.2929 17.2929C11.1054 17.4804 11 17.7348 11 18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19H20C20.2652 19 20.5196 18.8946 20.7071 18.7071C20.8946 18.5196 21 18.2652 21 18C21 17.7348 20.8946 17.4804 20.7071 17.2929C20.5196 17.1054 20.2652 17 20 17ZM29 15.5C28.9964 18.8141 27.6782 21.9914 25.3348 24.3348C22.9914 26.6782 19.8141 27.9964 16.5 28H5.95875C5.43946 27.9993 4.94163 27.7928 4.57444 27.4256C4.20724 27.0584 4.00066 26.5605 4 26.0413V15.5C4 12.1848 5.31696 9.00537 7.66117 6.66116C10.0054 4.31696 13.1848 3 16.5 3C19.8152 3 22.9946 4.31696 25.3388 6.66116C27.683 9.00537 29 12.1848 29 15.5ZM27 15.5C27 12.7152 25.8938 10.0445 23.9246 8.07538C21.9555 6.10625 19.2848 5 16.5 5C13.7152 5 11.0445 6.10625 9.07538 8.07538C7.10625 10.0445 6 12.7152 6 15.5V26H16.5C19.2839 25.997 21.9528 24.8898 23.9213 22.9213C25.8898 20.9528 26.997 18.2839 27 15.5Z" fill="currentColor"/></svg>`,
        QUESTION: `<svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M17.5 22.5a1.5 1.5 0 0 1-.926 1.386 1.5 1.5 0 0 1-1.635-.325 1.5 1.5 0 0 1-.325-1.635A1.5 1.5 0 0 1 16 21a1.5 1.5 0 0 1 1.5 1.5zM16 9c-2.758 0-5 2.019-5 4.5v.5a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-.5c0-1.375 1.346-2.5 3-2.5s3 1.125 3 2.5-1.346 2.5-3 2.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-.09c2.28-.419 4-2.238 4-4.41 0-2.481-2.242-4.5-5-4.5zm13 7a13 13 0 0 1-8.025 12.01 13 13 0 0 1-14.167-2.818A13 13 0 0 1 3.99 11.025 13 13 0 0 1 16 3c3.447.004 6.751 1.374 9.188 3.812S28.996 12.553 29 16zm-2 0A11 11 0 0 0 20.21 5.837 11 11 0 0 0 8.222 8.222 11 11 0 0 0 5.837 20.21 11 11 0 0 0 16 27a11.01 11.01 0 0 0 11-11z" fill="currentColor"/></svg>`,
        TRASH: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M20.25 4.5H16.5v-.75a2.25 2.25 0 0 0-2.25-2.25h-4.5A2.25 2.25 0 0 0 7.5 3.75v.75H3.75a.75.75 0 0 0-.75.75.75.75 0 0 0 .75.75h.75v13.5A1.5 1.5 0 0 0 6 21h12a1.5 1.5 0 0 0 1.5-1.5V6h.75a.75.75 0 0 0 .75-.75.75.75 0 0 0-.75-.75zM9 3.75A.75.75 0 0 1 9.75 3h4.5a.75.75 0 0 1 .75.75v.75H9v-.75zm9 15.75H6V6h12v13.5zm-7.5-9.75v6a.75.75 0 0 1-.75.75.75.75 0 0 1-.75-.75v-6A.75.75 0 0 1 9.75 9a.75.75 0 0 1 .75.75zm4.5 0v6a.75.75 0 0 1-.75.75.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75.75.75 0 0 1 .75.75z" fill="#27262c" fill-opacity=".72"/></svg>`,
        HOURGLASS: `<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M12.75 4.728V2.5a1.25 1.25 0 0 0-1.25-1.25h-7A1.25 1.25 0 0 0 3.25 2.5v2.25c0 .194.046.385.133.559s.212.325.367.441l3 2.25-3 2.25c-.155.117-.281.268-.367.441s-.132.365-.133.559v2.25a1.25 1.25 0 0 0 1.25 1.25h7a1.25 1.25 0 0 0 1.25-1.25v-2.227a1.26 1.26 0 0 0-.496-1L9.244 8l3.01-2.275c.154-.117.279-.268.365-.441a1.26 1.26 0 0 0 .132-.557zm-1.5 8.523h-6.5v-1.875L8 8.938l3.25 2.458v1.854zm0-8.647L8 7.063 4.75 4.625V2.75h6.5v1.853z" fill="currentColor"/></svg>`,
        PAYMENT_FILE: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.0306 7.71938L14.7806 2.46938C14.7109 2.39975 14.6282 2.34454 14.5371 2.3069C14.4461 2.26926 14.3485 2.24992 14.25 2.25H5.25C4.85218 2.25 4.47064 2.40804 4.18934 2.68934C3.90804 2.97064 3.75 3.35218 3.75 3.75V20.25C3.75 20.6478 3.90804 21.0294 4.18934 21.3107C4.47064 21.592 4.85218 21.75 5.25 21.75H18.75C19.1478 21.75 19.5294 21.592 19.8107 21.3107C20.092 21.0294 20.25 20.6478 20.25 20.25V8.25C20.2501 8.15148 20.2307 8.05391 20.1931 7.96286C20.1555 7.87182 20.1003 7.78908 20.0306 7.71938ZM15 4.81031L17.6897 7.5H15V4.81031ZM18.75 20.25H5.25V3.75H13.5V8.25C13.5 8.44891 13.579 8.63968 13.7197 8.78033C13.8603 8.92098 14.0511 9 14.25 9H18.75V20.25ZM15.75 12.75C15.75 12.9489 15.671 13.1397 15.5303 13.2803C15.3897 13.421 15.1989 13.5 15 13.5H9C8.80109 13.5 8.61032 13.421 8.46967 13.2803C8.32902 13.1397 8.25 12.9489 8.25 12.75C8.25 12.5511 8.32902 12.3603 8.46967 12.2197C8.61032 12.079 8.80109 12 9 12H15C15.1989 12 15.3897 12.079 15.5303 12.2197C15.671 12.3603 15.75 12.5511 15.75 12.75ZM15.75 15.75C15.75 15.9489 15.671 16.1397 15.5303 16.2803C15.3897 16.421 15.1989 16.5 15 16.5H9C8.80109 16.5 8.61032 16.421 8.46967 16.2803C8.32902 16.1397 8.25 15.9489 8.25 15.75C8.25 15.5511 8.32902 15.3603 8.46967 15.2197C8.61032 15.079 8.80109 15 9 15H15C15.1989 15 15.3897 15.079 15.5303 15.2197C15.671 15.3603 15.75 15.5511 15.75 15.75Z" fill="currentColor"/></svg>`,
        CHEVRON: `<svg fill="none" height="32" viewBox="0 0 32 32" width="32"><path d="m26.7071 20.7075c-.0929.093-.2032.1667-.3246.2171-.1214.0503-.2515.0762-.3829.0762s-.2616-.0259-.383-.0762c-.1214-.0504-.2316-.1241-.3245-.2171l-9.2925-9.2938-9.29252 9.2938c-.18764.1876-.44214.2931-.7075.2931s-.51986-.1055-.7075-.2931-.29306-.4421-.29306-.7075.10542-.5199.29306-.7075l10.00002-10.00001c.0929-.09297.2031-.16673.3245-.21706.1214-.05032.2516-.07622.383-.07622s.2615.0259.3829.07622c.1214.05033.2317.12409.3246.21706l10 10.00001c.093.0929.1667.2032.217.3246.0504.1214.0763.2515.0763.3829s-.0259.2615-.0763.3829c-.0503.1214-.124.2317-.217.3246z" fill="currentColor"/></svg>`,
        CHECK: `<svg fill="none" height="11" viewBox="0 0 16 11" width="16"><path clip-rule="evenodd" d="m15.7071.292893c.3905.390524.3905 1.023687 0 1.414217l-8.99999 8.99999c-.39053.3905-1.02369.3905-1.41422 0l-4.999997-4.99999c-.3905241-.39053-.3905241-1.02369 0-1.41422.390524-.39052 1.023687-.39052 1.414217 0l4.29289 4.2929 8.2929-8.292897c.3905-.3905241 1.0237-.3905241 1.4142 0z" fill="currentColor" fill-rule="evenodd"/></svg>`,
        SELECT_ARROW: `<svg fill="none" height="16" viewBox="0 0 16 16" width="16"><path d="m13.5306 6.53061-5 4.99999c-.06968.0699-.15247.1254-.24364.1633-.09116.0378-.1889.0573-.28761.0573s-.19645-.0195-.28762-.0573c-.09116-.0379-.17395-.0934-.24363-.1633l-5-4.99999c-.1409-.14089-.22005-.33199-.22005-.53125 0-.19925.07915-.39035.22005-.53125.14089-.14089.33199-.22005.53125-.22005s.39035.07916.53125.22005l4.46937 4.46938 4.46933-4.47c.1409-.1409.332-.22005.5313-.22005s.3904.07915.5312.22005c.1409.14089.2201.33199.2201.53125s-.0792.39035-.2201.53125z" fill="#272a2a" fill-opacity=".56"/></svg>`,
    };

    // RENDER ICONS
    (() => {
        function insertIcon(oldElement, newElementString) {
            const parent = oldElement.parentNode;
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = newElementString;
            const newElement = tempDiv.firstChild;

            Array.from(oldElement.attributes).forEach((attr) => {
                newElement.setAttribute(attr.name, attr.value);
            });

            parent.replaceChild(newElement, oldElement);
        }

        const iconClasses = [
            { className: '.js-icon-ok', iconType: ICONS.OK },
            { className: '.js-icon-record', iconType: ICONS.RECORD },
            { className: '.js-icon-sign', iconType: ICONS.SIGN },
            { className: '.js-icon-warning', iconType: ICONS.WARNING },
            { className: '.js-icon-arrow', iconType: ICONS.ARROW },
            { className: '.js-icon-arrow-left', iconType: ICONS.ARROW_LEFT },
            { className: '.js-icon-file', iconType: ICONS.FILE },
            { className: '.js-icon-receipt', iconType: ICONS.RECEIPT },
            { className: '.js-icon-picture', iconType: ICONS.PICTURE },
            { className: '.js-icon-video', iconType: ICONS.VIDEO },
            { className: '.js-icon-cross', iconType: ICONS.CROSS },
            { className: '.js-icon-home', iconType: ICONS.HOME },
            { className: '.js-icon-list', iconType: ICONS.LIST },
            { className: '.js-icon-files', iconType: ICONS.FILES },
            { className: '.js-icon-chats', iconType: ICONS.CHATS },
            { className: '.js-icon-question', iconType: ICONS.QUESTION },
            { className: '.js-icon-trash', iconType: ICONS.TRASH },
            {
                className: '.js-icon-chat-with-text',
                iconType: ICONS.CHAT_WITH_TEXT,
            },
            { className: '.js-icon-trash', iconType: ICONS.TRASH },
            { className: '.js-icon-hourglass', iconType: ICONS.HOURGLASS },
            {
                className: '.js-icon-payment-file',
                iconType: ICONS.PAYMENT_FILE,
            },
            {
                className: '.js-icon-chevron',
                iconType: ICONS.CHEVRON,
            },
            {
                className: '.js-icon-check',
                iconType: ICONS.CHECK,
            },
            {
                className: '.js-icon-select-arrow',
                iconType: ICONS.SELECT_ARROW,
            },
        ];

        iconClasses.forEach(({ className, iconType }) => {
            document.querySelectorAll(className)?.forEach((icon) => {
                insertIcon(icon, iconType);
            });
        });
    })();

    // POPUP QR
    (() => {
        const openPopupButton = document.querySelector('.js-auth-button');
        const closePopupButton = document.querySelector('.js-close-popup');
        const overlay = document.querySelector('.js-popup-overlay');
        const popup = document.querySelector('.js-popup');

        if (openPopupButton && closePopupButton && overlay && popup) {
            function openPopup() {
                popup.classList.remove(NONE_CLASS);
                document.body.classList.add('modal-open');
                popup.focus();
                trapFocus(popup);
            }

            function closePopup() {
                popup.classList.add(NONE_CLASS);
                document.body.classList.remove('modal-open');
            }

            function trapFocus(element) {
                const focusableElements = element.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const firstFocusableElement = focusableElements[0];
                const lastFocusableElement =
                    focusableElements[focusableElements.length - 1];

                element.addEventListener('keydown', function (e) {
                    const isTabPressed = e.key === 'Tab' || e.keyCode === 9;

                    if (!isTabPressed) {
                        return;
                    }

                    if (e.shiftKey) {
                        if (document.activeElement === firstFocusableElement) {
                            lastFocusableElement.focus();
                            e.preventDefault();
                        }
                    } else {
                        if (document.activeElement === lastFocusableElement) {
                            firstFocusableElement.focus();
                            e.preventDefault();
                        }
                    }
                });
            }

            openPopupButton.addEventListener('click', openPopup);
            closePopupButton.addEventListener('click', closePopup);
            overlay.addEventListener('click', closePopup);
        }
    })();

    // SLIDER
    (() => {
        let hasInit = false;
        const slider = document.querySelector('.js-slider');
        const sliderList = slider?.querySelector('.js-slider-list');
        const sliderTrack = slider?.querySelector('.js-slider-track');
        const slides = slider?.querySelectorAll('.js-slide');
        const pagination = slider?.querySelector('.js-slider-pagination');
        const slideWidth = slides?.[0]?.offsetWidth || 0;
        let slideIndex = 0;
        let posInit = 0;
        let posX1 = 0;
        let posX2 = 0;
        let posY1 = 0;
        let posY2 = 0;
        let posFinal = 0;
        let isSwipe = false;
        let isScroll = false;
        let allowSwipe = true;
        let transition = true;
        let nextTrf = 0;
        let prevTrf = 0;
        let lastTrf = Number(slides?.length || 0) * slideWidth;
        let posThreshold = slideWidth * 0.35;
        let trfRegExp = /([-0-9.]+(?=px))/;

        window.addEventListener('resize', initSlider);
        initSlider();

        function initSlider() {
            if (slider && sliderList && sliderTrack && slides && pagination) {
                if (window.innerWidth < 768) {
                    if (!hasInit) {
                        init();
                    }
                    hasInit = true;
                } else {
                    if (hasInit) {
                        deactivate();
                        hasInit = false;
                    }
                }
            }
        }

        function init() {
            initPagination();
            sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
            sliderList.classList.add('grab');
            pagination.classList.remove(NONE_CLASS);

            sliderTrack.addEventListener(
                'transitionend',
                () => (allowSwipe = true)
            );
            slider.addEventListener('touchstart', swipeStart);
            slider.addEventListener('mousedown', swipeStart);
        }

        function deactivate() {
            sliderTrack.style.transform = 'none';
            sliderList.classList.remove('grab');
            pagination.classList.add(NONE_CLASS);

            slider.removeEventListener('touchstart', swipeStart);
            slider.removeEventListener('mousedown', swipeStart);
        }

        function initPagination() {
            slides.forEach((_, index) => {
                const tab = document.createElement('div');
                tab.classList.add('slider-pagination__tab');

                if (index === 0) {
                    tab.classList.add('slider-pagination__tab_active');
                }

                pagination.appendChild(tab);
            });
        }

        function getEvent() {
            return event.type.search('touch') !== -1 ? event.touches[0] : event;
        }

        function slide() {
            if (transition) {
                sliderTrack.style.transition = 'transform .5s';
            }

            sliderTrack.style.transform = `translate3d(-${
                slideIndex * slideWidth
            }px, 0px, 0px)`;

            pagination.childNodes.forEach((node, index) => {
                if (index === slideIndex) {
                    node.classList.add('slider-pagination__tab_active');
                } else {
                    node.classList.remove('slider-pagination__tab_active');
                }
            });
        }

        function swipeStart() {
            let evt = getEvent();

            if (allowSwipe) {
                transition = true;

                nextTrf = (slideIndex + 1) * -slideWidth;
                prevTrf = (slideIndex - 1) * -slideWidth;

                posInit = posX1 = evt.clientX;
                posY1 = evt.clientY;

                sliderTrack.style.transition = '';

                document.addEventListener('touchmove', swipeAction);
                document.addEventListener('mousemove', swipeAction);
                document.addEventListener('touchend', swipeEnd);
                document.addEventListener('mouseup', swipeEnd);

                sliderList.classList.remove('grab');
                sliderList.classList.add('grabbing');
            }
        }

        function swipeAction() {
            let evt = getEvent(),
                style = sliderTrack.style.transform,
                transform = +style.match(trfRegExp)[0];

            posX2 = posX1 - evt.clientX;
            posX1 = evt.clientX;

            posY2 = posY1 - evt.clientY;
            posY1 = evt.clientY;

            // определение действия свайп или скролл
            if (!isSwipe && !isScroll) {
                let posY = Math.abs(posY2);
                if (posY > 7 || posX2 === 0) {
                    isScroll = true;
                    allowSwipe = false;
                } else if (posY < 7) {
                    isSwipe = true;
                }
            }

            if (isSwipe) {
                // запрет ухода влево на первом слайде
                if (slideIndex === 0) {
                    if (posInit < posX1) {
                        setTransform(transform, 0);
                        return;
                    } else {
                        allowSwipe = true;
                    }
                }

                // запрет ухода вправо на последнем слайде
                if (slideIndex === slides.length - 1) {
                    if (posInit > posX1) {
                        setTransform(transform, lastTrf);
                        return;
                    } else {
                        allowSwipe = true;
                    }
                }

                // запрет протаскивания дальше одного слайда
                if (
                    (posInit > posX1 && transform < nextTrf) ||
                    (posInit < posX1 && transform > prevTrf)
                ) {
                    reachEdge();
                    return;
                }

                // двигаем слайд
                sliderTrack.style.transform = `translate3d(${
                    transform - posX2
                }px, 0px, 0px)`;
            }
        }

        function swipeEnd() {
            posFinal = posInit - posX1;

            isScroll = false;
            isSwipe = false;

            document.removeEventListener('touchmove', swipeAction);
            document.removeEventListener('mousemove', swipeAction);
            document.removeEventListener('touchend', swipeEnd);
            document.removeEventListener('mouseup', swipeEnd);

            sliderList.classList.add('grab');
            sliderList.classList.remove('grabbing');

            if (allowSwipe) {
                if (Math.abs(posFinal) > posThreshold) {
                    if (posInit < posX1) {
                        slideIndex--;
                    } else if (posInit > posX1) {
                        slideIndex++;
                    }
                }

                if (posInit !== posX1) {
                    allowSwipe = false;
                    slide();
                } else {
                    allowSwipe = true;
                }
            } else {
                allowSwipe = true;
            }
        }

        function setTransform(transform, comapreTransform) {
            if (transform >= comapreTransform) {
                if (transform > comapreTransform) {
                    sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
                }
            }
            allowSwipe = false;
        }

        function reachEdge() {
            transition = false;
            swipeEnd();
            allowSwipe = true;
        }
    })();

    // CARD PRICES
    (() => {
        const cards = document.querySelectorAll('.js-card');

        cards?.forEach((card) => {
            const select = card.querySelector('.js-price-select');
            const buttons = card.querySelectorAll('.js-price-button');
            const priceElement = card.querySelector('.js-price');
            const prices = select?.dataset.prices?.split(' ') || [];

            if (select && priceElement && prices.length > 0 && buttons) {
                buttons.forEach((button, buttonIndex) => {
                    button.addEventListener('click', () => {
                        buttons.forEach((element) => {
                            element.classList.remove('card__price-tab_active');
                        });

                        button.classList.add('card__price-tab_active');
                        const clickedPrice = prices[buttonIndex] || prices[0];
                        priceElement.innerHTML = `${clickedPrice} ₽`;
                    });
                });
            }
        });
    })();

    // TABLE MOBILE HEADER
    (() => {
        const BILL = 'Счет';
        const PERIOD = 'Период';
        const SUM = 'Сумма';

        const HEADER_CLASS = 'table__mobile-header';
        const BORDER_CLASS = 'table__row_border';

        let hasInit = false;

        window.addEventListener('resize', initMobileTable);
        initMobileTable();

        function initMobileTable() {
            if (window.innerWidth < 768) {
                if (!hasInit) {
                    init();
                }
                hasInit = true;
            }
        }

        function init() {
            const tables = document.querySelectorAll('.js-table') || [];

            tables.forEach((table) => {
                const rows = table.querySelectorAll('.js-table-row') || [];

                rows.forEach((row, index) => {
                    const bill = row.querySelector('.js-table-bill');
                    const period = row.querySelector('.js-table-period');
                    const sum = row.querySelector('.js-table-sum');

                    if (bill && period && sum) {
                        const preBill = document.createElement('div');
                        const prePeriod = document.createElement('div');
                        const preSum = document.createElement('div');

                        preBill.classList.add(HEADER_CLASS);
                        prePeriod.classList.add(HEADER_CLASS);
                        preSum.classList.add(HEADER_CLASS);

                        preBill.innerHTML = BILL;
                        prePeriod.innerHTML = PERIOD;
                        preSum.innerHTML = SUM;

                        bill.prepend(preBill);
                        period.prepend(prePeriod);
                        sum.prepend(preSum);
                    }
                });
            });
        }
    })();

    // TOOLTIP POSITION
    (() => {
        const TOOLTIP_TOP_CLASS = 'tooltip_top';
        const TOOLTIP_BOTTOM_CLASS = 'tooltip_bottom';

        document.addEventListener('DOMContentLoaded', function () {
            window.addEventListener('resize', initTooltip);
            initTooltip();

            function initTooltip() {
                const triggers = document.querySelectorAll(
                    '.js-tooltip-trigger'
                );

                triggers?.forEach((trigger) => {
                    const tooltip = trigger.querySelector('.js-tooltip');

                    if (tooltip) {
                        adjustTooltipPosition(trigger, tooltip);
                    }
                });
            }

            function adjustTooltipPosition(trigger, tooltip) {
                tooltip.classList.remove(TOOLTIP_TOP_CLASS);
                tooltip.classList.remove(TOOLTIP_BOTTOM_CLASS);

                const viewportWidth = window.innerWidth;
                const viewportHeight = window.innerHeight;
                const tooltipRect = tooltip.getBoundingClientRect();

                const tooltipRightPointX = tooltipRect.left + tooltipRect.width;
                const tooltipBottomPointY =
                    tooltipRect.bottom + tooltipRect.height;

                if (tooltipRightPointX > viewportWidth) {
                    tooltip.classList.add(TOOLTIP_BOTTOM_CLASS);
                }

                if (tooltipBottomPointY > viewportHeight) {
                    tooltip.classList.add(TOOLTIP_TOP_CLASS);
                }
            }
        });
    })();

    // NEW MAIL FORM
    (() => {
        const form = document.querySelector('.js-new-mail');
        const mailSection = document.querySelector('.js-mail-section');
        const newMailSection = document.querySelector('.js-new-mail-section');
        const createButton = document.querySelector('.js-mailing-create');
        const createWithImgButton = document.querySelector(
            '.js-mailing-create-image'
        );
        const title = document.querySelector('.js-mailing-title');
        const newTitle = document.querySelector('.js-mailing-title-new');

        if (form && mailSection && newMailSection) {
            if (createButton) {
                createButton.addEventListener('click', () => {
                    showCreateSection();
                    imageBlockToggle(false);
                });
            }

            if (createWithImgButton) {
                createWithImgButton.addEventListener('click', () => {
                    showCreateSection();
                    imageBlockToggle(true);
                });
            }

            function showCreateSection() {
                mailSection.classList.add(NONE_CLASS);
                title?.classList.add(NONE_CLASS);
                newMailSection.classList.remove(NONE_CLASS);
                newTitle?.classList.remove(NONE_CLASS);
            }

            function imageBlockToggle(show) {
                const imageBlock = form.querySelector('.js-form-image-block');

                if (imageBlock) {
                    if (show) {
                        imageBlock.classList.remove(NONE_CLASS);
                    } else {
                        imageBlock.classList.add(NONE_CLASS);
                    }
                }
            }
        }
    })();

    // NEW MAIL FORM TEL AREA
    (() => {
        const TEXTAREA_LINE_NUMBER_CLASS = 'new-mail-form__tel-line';

        const forms = document.querySelectorAll('.js-form');

        forms.forEach((form) => {
            const telTextarea = form?.querySelector('.js-form-tel-input');
            const telLinesBlock = form?.querySelector('.js-form-tel-lines');

            if (telTextarea && telLinesBlock) {
                initLine(10)();

                telTextarea.addEventListener('input', initLine());

                function initLine(count) {
                    return () => {
                        const lineCount = count ?? getLineCount(telTextarea);
                        renderLinesNumber(telLinesBlock, lineCount);
                    };
                }
            }
        });

        function getLineCount(textarea) {
            const style = window.getComputedStyle(textarea);
            const lineHeight = parseInt(style.lineHeight);
            const padding =
                parseInt(style.paddingTop) + parseInt(style.paddingBottom);
            const height = textarea.scrollHeight - padding;

            return Math.round(height / lineHeight);
        }

        function renderLinesNumber(lineWrapper, lineCount) {
            lineWrapper.innerHTML = '';

            for (let i = 0; i < lineCount; i += 1) {
                const line = document.createElement('div');
                line.classList.add(TEXTAREA_LINE_NUMBER_CLASS);
                line.innerHTML = i + 1;
                lineWrapper.appendChild(line);
            }
        }
    })();

    // NEW MAIL FORM RULES CHECKBOX
    (() => {
        const CHECKBOX_CHECKED_CLASS = 'new-mail-form__rules-checkbox_checked';
        const CHECKBOX_HOVER_CLASS = 'new-mail-form__rules-checkbox_hover';

        const forms = document.querySelectorAll('.js-form');

        forms.forEach((form) => {
            const ruleCheckboxInput = form?.querySelector(
                '.js-form-rule-checkbox-input'
            );
            const ruleCheckbox = form?.querySelector('.js-form-rule-checkbox');
            const ruleLabel = form?.querySelector(
                '.js-form-rule-checkbox-label'
            );

            if (ruleCheckboxInput && ruleCheckbox) {
                ruleCheckboxInput.addEventListener('input', (event) => {
                    if (event.target.checked) {
                        ruleCheckbox.classList.add(CHECKBOX_CHECKED_CLASS);
                    } else {
                        ruleCheckbox.classList.remove(CHECKBOX_CHECKED_CLASS);
                    }
                });

                ruleCheckbox.addEventListener('click', () => {
                    const hasChecked = !ruleCheckboxInput.checked;
                    ruleCheckboxInput.checked = hasChecked;

                    if (hasChecked) {
                        ruleCheckbox.classList.add(CHECKBOX_CHECKED_CLASS);
                    } else {
                        ruleCheckbox.classList.remove(CHECKBOX_CHECKED_CLASS);
                    }
                });
            }

            if (ruleLabel && ruleCheckbox) {
                ruleLabel.addEventListener('mouseenter', () => {
                    ruleCheckbox.classList.add(CHECKBOX_HOVER_CLASS);
                });

                ruleLabel.addEventListener('mouseleave', () => {
                    ruleCheckbox.classList.remove(CHECKBOX_HOVER_CLASS);
                });
            }
        });
    })();

    // CHAT-BOT
    (() => {
        const mainSections = document.querySelectorAll(
            '.js-chat-bot-main-section'
        );
        const connectSections = document.querySelectorAll(
            '.js-chat-bot-connect-section'
        );
        const settingsSection = document.querySelectorAll(
            '.js-chat-bot-settings-section'
        );

        const mainSectionButtons = document.querySelectorAll(
            '.js-chat-bot-main-section-button'
        );
        const connectSectionButtons = document.querySelectorAll(
            '.js-chat-bot-connect-section-button'
        );
        const settingsSectionButtons = document.querySelectorAll(
            '.js-chat-bot-settings-section-button'
        );

        mainSectionButtons.forEach((button) => {
            button.addEventListener('click', () => {
                hideAllSections();
                mainSections.forEach(showSection);
            });
        });

        connectSectionButtons.forEach((button) => {
            button.addEventListener('click', () => {
                hideAllSections();
                connectSections.forEach(showSection);
            });
        });

        settingsSectionButtons.forEach((button) => {
            button.addEventListener('click', () => {
                hideAllSections();
                settingsSection.forEach(showSection);
            });
        });

        function hideAllSections() {
            mainSections.forEach(hideSection);
            connectSections.forEach(hideSection);
            settingsSection.forEach(hideSection);
        }

        function hideSection(section) {
            section.classList.add(NONE_CLASS);
        }

        function showSection(section) {
            section.classList.remove(NONE_CLASS);
        }
    })();

    // CHAT_BOT ACCORDION
    (() => {
        class ItcAccordion {
            constructor(target, config) {
                this._el =
                    typeof target === 'string'
                        ? document.querySelector(target)
                        : target;
                const defaultConfig = {
                    alwaysOpen: true,
                    duration: 350,
                };
                this._config = Object.assign(defaultConfig, config);
                this.addEventListener();
            }

            addEventListener() {
                this._el.addEventListener('click', (e) => {
                    const elHeader = e.target.closest('.js-accordion-header');

                    if (!elHeader) {
                        return;
                    }
                    if (!this._config.alwaysOpen) {
                        const elOpenItem = this._el.querySelector(
                            '.accordion__item_show'
                        );
                        if (elOpenItem) {
                            elOpenItem !== elHeader.parentElement
                                ? this.toggle(elOpenItem)
                                : null;
                        }
                    }
                    this.toggle(elHeader.parentElement);
                });
            }

            show(el) {
                const elBody = el.querySelector('.accordion__body');
                if (
                    elBody.classList.contains('collapsing') ||
                    el.classList.contains('accordion__item_show')
                ) {
                    return;
                }
                elBody.style['display'] = 'block';
                const height = elBody.offsetHeight;
                elBody.style['height'] = 0;
                elBody.style['overflow'] = 'hidden';
                elBody.style[
                    'transition'
                ] = `height ${this._config.duration}ms ease`;
                elBody.classList.add('collapsing');
                el.classList.add('accordion__item_slidedown');
                elBody.offsetHeight;
                elBody.style['height'] = `${height}px`;
                window.setTimeout(() => {
                    elBody.classList.remove('collapsing');
                    el.classList.remove('accordion__item_slidedown');
                    elBody.classList.add('collapse');
                    el.classList.add('accordion__item_show');
                    elBody.style['display'] = '';
                    elBody.style['height'] = '';
                    elBody.style['transition'] = '';
                    elBody.style['overflow'] = '';
                }, this._config.duration);
            }

            hide(el) {
                const elBody = el.querySelector('.accordion__body');
                if (
                    elBody.classList.contains('collapsing') ||
                    !el.classList.contains('accordion__item_show')
                ) {
                    return;
                }
                elBody.style['height'] = `${elBody.offsetHeight}px`;
                elBody.offsetHeight;
                elBody.style['display'] = 'block';
                elBody.style['height'] = 0;
                elBody.style['overflow'] = 'hidden';
                elBody.style[
                    'transition'
                ] = `height ${this._config.duration}ms ease`;
                elBody.classList.remove('collapse');
                el.classList.remove('accordion__item_show');
                elBody.classList.add('collapsing');
                window.setTimeout(() => {
                    elBody.classList.remove('collapsing');
                    elBody.classList.add('collapse');
                    elBody.style['display'] = '';
                    elBody.style['height'] = '';
                    elBody.style['transition'] = '';
                    elBody.style['overflow'] = '';
                }, this._config.duration);
            }

            toggle(el) {
                el.classList.contains('accordion__item_show')
                    ? this.hide(el)
                    : this.show(el);
            }
        }

        (() => {
            const accordions = document.querySelectorAll('.js-accordion');

            accordions.forEach((accordion, index) => {
                const accordionClass = new ItcAccordion(accordion, {
                    alwaysOpen: true,
                });
            });
        })();
    })();

    (() => {
        const selectElements = document.querySelectorAll('select');

        selectElements.forEach((select) => {
            togglePlaceholder(select);

            select.addEventListener('change', function () {
                togglePlaceholder(select);
            });
        });

        function togglePlaceholder(select) {
            if (select.value === '') {
                select.classList.add('select-placeholder');
            } else {
                select.classList.remove('select-placeholder');
            }
        }
    })();
});
