import React from "react";

const Logo = () => {
  return (
    <div>
      <span className="dark:hidden">
        <svg
          width={119}
          height={31}
          viewBox="0 0 119 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width={70} height={27} fill="#00AAA1" />
          <path
            d="M25.8 24L20.508 8.205H20.4C20.418 8.565 20.445 9.078 20.481 9.744C20.517 10.392 20.544 11.103 20.562 11.877C20.598 12.633 20.616 13.344 20.616 14.01V24H17.511V4.722H22.317L27.393 19.869H27.501L32.793 4.722H37.599V24H34.305V13.848C34.305 13.236 34.314 12.57 34.332 11.85C34.368 11.112 34.395 10.419 34.413 9.771C34.449 9.105 34.476 8.592 34.494 8.232H34.386L28.878 24H25.8ZM40.6152 9.366H44.3142L47.2302 17.628C47.3562 17.988 47.4642 18.339 47.5542 18.681C47.6622 19.005 47.7522 19.338 47.8242 19.68C47.8962 20.022 47.9502 20.364 47.9862 20.706H48.0942C48.1662 20.256 48.2742 19.761 48.4182 19.221C48.5802 18.681 48.7422 18.15 48.9042 17.628L51.7122 9.366H55.3842L49.1472 25.944C48.7872 26.898 48.3282 27.717 47.7702 28.401C47.2302 29.085 46.5822 29.598 45.8262 29.94C45.0882 30.3 44.2512 30.48 43.3152 30.48C42.8832 30.48 42.4962 30.453 42.1542 30.399C41.8302 30.363 41.5422 30.318 41.2902 30.264V27.564C41.4882 27.6 41.7222 27.636 41.9922 27.672C42.2802 27.708 42.5772 27.726 42.8832 27.726C43.4412 27.726 43.9182 27.609 44.3142 27.375C44.7282 27.159 45.0702 26.853 45.3402 26.457C45.6282 26.061 45.8622 25.62 46.0422 25.134L46.4742 23.946L40.6152 9.366Z"
            fill="white"
          />
          <path
            d="M77.236 12.862C78.8113 12.862 80.0013 13.0887 80.806 13.542C81.622 13.9953 82.03 14.783 82.03 15.905C82.03 16.6077 81.8543 17.197 81.503 17.673C81.1517 18.149 80.6473 18.4437 79.99 18.557V18.642C80.432 18.7213 80.8343 18.8687 81.197 19.084C81.5597 19.288 81.843 19.5883 82.047 19.985C82.2623 20.3703 82.37 20.8803 82.37 21.515C82.37 22.6143 81.979 23.47 81.197 24.082C80.4263 24.694 79.3667 25 78.018 25H73.581V12.862H77.236ZM77.525 17.809C78.3863 17.809 78.9757 17.673 79.293 17.401C79.6217 17.129 79.786 16.7267 79.786 16.194C79.786 15.65 79.5877 15.259 79.191 15.021C78.8057 14.783 78.1937 14.664 77.355 14.664H75.757V17.809H77.525ZM75.757 19.56V23.181H77.729C78.613 23.181 79.225 23.011 79.565 22.671C79.9163 22.331 80.092 21.8777 80.092 21.311C80.092 20.7897 79.9107 20.3703 79.548 20.053C79.1967 19.7243 78.5563 19.56 77.627 19.56H75.757ZM92.8941 20.376C92.8941 21.906 92.4974 23.0903 91.7041 23.929C90.9107 24.7563 89.8341 25.17 88.4741 25.17C87.6354 25.17 86.8874 24.983 86.2301 24.609C85.5727 24.235 85.0571 23.691 84.6831 22.977C84.3091 22.263 84.1221 21.396 84.1221 20.376C84.1221 18.846 84.5131 17.673 85.2951 16.857C86.0884 16.0297 87.1651 15.616 88.5251 15.616C89.3751 15.616 90.1287 15.803 90.7861 16.177C91.4434 16.5397 91.9591 17.078 92.3331 17.792C92.7071 18.4947 92.8941 19.356 92.8941 20.376ZM86.3151 20.376C86.3151 21.3507 86.4851 22.1043 86.8251 22.637C87.1764 23.1697 87.7374 23.436 88.5081 23.436C89.2787 23.436 89.8341 23.1697 90.1741 22.637C90.5254 22.1043 90.7011 21.3507 90.7011 20.376C90.7011 19.4013 90.5254 18.6533 90.1741 18.132C89.8341 17.6107 89.2731 17.35 88.4911 17.35C87.7317 17.35 87.1764 17.6107 86.8251 18.132C86.4851 18.6533 86.3151 19.4013 86.3151 20.376ZM103.336 20.376C103.336 21.906 102.94 23.0903 102.146 23.929C101.353 24.7563 100.276 25.17 98.9164 25.17C98.0778 25.17 97.3298 24.983 96.6724 24.609C96.0151 24.235 95.4994 23.691 95.1254 22.977C94.7514 22.263 94.5644 21.396 94.5644 20.376C94.5644 18.846 94.9554 17.673 95.7374 16.857C96.5308 16.0297 97.6074 15.616 98.9674 15.616C99.8174 15.616 100.571 15.803 101.228 16.177C101.886 16.5397 102.401 17.078 102.775 17.792C103.149 18.4947 103.336 19.356 103.336 20.376ZM96.7574 20.376C96.7574 21.3507 96.9274 22.1043 97.2674 22.637C97.6188 23.1697 98.1798 23.436 98.9504 23.436C99.7211 23.436 100.276 23.1697 100.616 22.637C100.968 22.1043 101.143 21.3507 101.143 20.376C101.143 19.4013 100.968 18.6533 100.616 18.132C100.276 17.6107 99.7154 17.35 98.9334 17.35C98.1741 17.35 97.6188 17.6107 97.2674 18.132C96.9274 18.6533 96.7574 19.4013 96.7574 20.376ZM107.676 18.217C107.676 18.5117 107.664 18.8233 107.642 19.152C107.619 19.4807 107.596 19.7923 107.574 20.087H107.625C107.761 19.883 107.931 19.6507 108.135 19.39C108.339 19.1293 108.531 18.897 108.713 18.693L111.433 15.786H113.864L110.175 19.764L114.102 25H111.603L108.747 21.056L107.676 21.94V25H105.551V12.08H107.676V18.217Z"
            fill="#222222"
          />
          <mask
            id="mask0_109_321"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x={115}
            y={21}
            width={4}
            height={4}
          >
            <circle cx={117} cy={23} r={2} fill="white" />
          </mask>
          <g mask="url(#mask0_109_321)">
            <rect x={115} y={21} width={2} height={4} fill="#00AAA1" />
          </g>
          <mask
            id="mask1_109_321"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x={115}
            y={21}
            width={4}
            height={4}
          >
            <circle
              cx={117}
              cy={23}
              r={2}
              transform="rotate(-180 117 23)"
              fill="#222222"
            />
          </mask>
          <g mask="url(#mask1_109_321)">
            <rect
              x={119}
              y={25}
              width={2}
              height={4}
              transform="rotate(-180 119 25)"
              fill="#00AAA1"
            />
          </g>
        </svg>
      </span>
      <span className="hidden dark:inline">
        <svg
          width={119}
          height={31}
          viewBox="0 0 119 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y={1} width={70} height={27} fill="#475569" />
          <path
            d="M25.8 24L20.508 8.205H20.4C20.418 8.565 20.445 9.078 20.481 9.744C20.517 10.392 20.544 11.103 20.562 11.877C20.598 12.633 20.616 13.344 20.616 14.01V24H17.511V4.722H22.317L27.393 19.869H27.501L32.793 4.722H37.599V24H34.305V13.848C34.305 13.236 34.314 12.57 34.332 11.85C34.368 11.112 34.395 10.419 34.413 9.771C34.449 9.105 34.476 8.592 34.494 8.232H34.386L28.878 24H25.8ZM40.6152 9.366H44.3142L47.2302 17.628C47.3562 17.988 47.4642 18.339 47.5542 18.681C47.6622 19.005 47.7522 19.338 47.8242 19.68C47.8962 20.022 47.9502 20.364 47.9862 20.706H48.0942C48.1662 20.256 48.2742 19.761 48.4182 19.221C48.5802 18.681 48.7422 18.15 48.9042 17.628L51.7122 9.366H55.3842L49.1472 25.944C48.7872 26.898 48.3282 27.717 47.7702 28.401C47.2302 29.085 46.5822 29.598 45.8262 29.94C45.0882 30.3 44.2512 30.48 43.3152 30.48C42.8832 30.48 42.4962 30.453 42.1542 30.399C41.8302 30.363 41.5422 30.318 41.2902 30.264V27.564C41.4882 27.6 41.7222 27.636 41.9922 27.672C42.2802 27.708 42.5772 27.726 42.8832 27.726C43.4412 27.726 43.9182 27.609 44.3142 27.375C44.7282 27.159 45.0702 26.853 45.3402 26.457C45.6282 26.061 45.8622 25.62 46.0422 25.134L46.4742 23.946L40.6152 9.366Z"
            fill="#E2E8F0"
          />
          <path
            d="M77.236 13.862C78.29 13.862 79.174 13.964 79.888 14.168C80.602 14.3607 81.1347 14.678 81.486 15.12C81.8487 15.562 82.03 16.157 82.03 16.905C82.03 17.3697 81.9507 17.789 81.792 18.163C81.6333 18.537 81.401 18.843 81.095 19.081C80.8003 19.319 80.432 19.4777 79.99 19.557V19.642C80.4433 19.7213 80.8457 19.8687 81.197 20.084C81.5597 20.288 81.843 20.5883 82.047 20.985C82.2623 21.3703 82.37 21.8803 82.37 22.515C82.37 23.2517 82.1943 23.8807 81.843 24.402C81.4917 24.9233 80.9873 25.32 80.33 25.592C79.684 25.864 78.9133 26 78.018 26H73.581V13.862H77.236ZM77.525 18.809C78.3863 18.809 78.9757 18.673 79.293 18.401C79.6217 18.129 79.786 17.7267 79.786 17.194C79.786 16.65 79.5933 16.259 79.208 16.021C78.8227 15.783 78.205 15.664 77.355 15.664H75.757V18.809H77.525ZM75.757 20.56V24.181H77.729C78.613 24.181 79.225 24.011 79.565 23.671C79.9163 23.331 80.092 22.8777 80.092 22.311C80.092 21.9483 80.0183 21.6367 79.871 21.376C79.7237 21.1153 79.4687 20.917 79.106 20.781C78.7433 20.6337 78.2503 20.56 77.627 20.56H75.757ZM92.8941 21.376C92.8941 22.1467 92.7921 22.8267 92.5881 23.416C92.3841 24.0053 92.0894 24.5097 91.7041 24.929C91.3301 25.337 90.8654 25.6487 90.3101 25.864C89.7661 26.068 89.1597 26.17 88.4911 26.17C87.8564 26.17 87.2727 26.068 86.7401 25.864C86.2074 25.6487 85.7427 25.337 85.3461 24.929C84.9607 24.5097 84.6604 24.0053 84.4451 23.416C84.2297 22.8267 84.1221 22.1467 84.1221 21.376C84.1221 20.356 84.2977 19.4947 84.6491 18.792C85.0004 18.078 85.5047 17.5397 86.1621 17.177C86.8307 16.803 87.6184 16.616 88.5251 16.616C89.3864 16.616 90.1401 16.803 90.7861 17.177C91.4434 17.5397 91.9591 18.078 92.3331 18.792C92.7071 19.4947 92.8941 20.356 92.8941 21.376ZM86.3151 21.376C86.3151 22.022 86.3887 22.5773 86.5361 23.042C86.6947 23.4953 86.9327 23.841 87.2501 24.079C87.5787 24.317 87.9981 24.436 88.5081 24.436C89.0294 24.436 89.4487 24.317 89.7661 24.079C90.0947 23.841 90.3327 23.4953 90.4801 23.042C90.6274 22.5773 90.7011 22.022 90.7011 21.376C90.7011 20.7187 90.6217 20.169 90.4631 19.727C90.3157 19.2737 90.0777 18.9337 89.7491 18.707C89.4317 18.469 89.0181 18.35 88.5081 18.35C87.7374 18.35 87.1764 18.6107 86.8251 19.132C86.4851 19.6533 86.3151 20.4013 86.3151 21.376ZM103.336 21.376C103.336 22.1467 103.234 22.8267 103.03 23.416C102.826 24.0053 102.532 24.5097 102.146 24.929C101.772 25.337 101.308 25.6487 100.752 25.864C100.208 26.068 99.6021 26.17 98.9334 26.17C98.2988 26.17 97.7151 26.068 97.1824 25.864C96.6498 25.6487 96.1851 25.337 95.7884 24.929C95.4031 24.5097 95.1028 24.0053 94.8874 23.416C94.6721 22.8267 94.5644 22.1467 94.5644 21.376C94.5644 20.356 94.7401 19.4947 95.0914 18.792C95.4428 18.078 95.9471 17.5397 96.6044 17.177C97.2731 16.803 98.0608 16.616 98.9674 16.616C99.8288 16.616 100.582 16.803 101.228 17.177C101.886 17.5397 102.401 18.078 102.775 18.792C103.149 19.4947 103.336 20.356 103.336 21.376ZM96.7574 21.376C96.7574 22.022 96.8311 22.5773 96.9784 23.042C97.1371 23.4953 97.3751 23.841 97.6924 24.079C98.0211 24.317 98.4404 24.436 98.9504 24.436C99.4718 24.436 99.8911 24.317 100.208 24.079C100.537 23.841 100.775 23.4953 100.922 23.042C101.07 22.5773 101.143 22.022 101.143 21.376C101.143 20.7187 101.064 20.169 100.905 19.727C100.758 19.2737 100.52 18.9337 100.191 18.707C99.8741 18.469 99.4604 18.35 98.9504 18.35C98.1798 18.35 97.6188 18.6107 97.2674 19.132C96.9274 19.6533 96.7574 20.4013 96.7574 21.376ZM107.676 19.217C107.676 19.5117 107.664 19.8233 107.642 20.152C107.619 20.4693 107.596 20.781 107.574 21.087H107.625C107.715 20.951 107.823 20.8037 107.948 20.645C108.072 20.475 108.197 20.3107 108.322 20.152C108.458 19.982 108.588 19.829 108.713 19.693L111.433 16.786H113.864L110.175 20.764L114.102 26H111.603L108.747 22.056L107.676 22.94V26H105.551V13.08H107.676V19.217Z"
            fill="#E2E8F0"
          />
          <mask
            id="mask0_631_375"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x={115}
            y={22}
            width={4}
            height={4}
          >
            <circle cx={117} cy={24} r={2} fill="white" />
          </mask>
          <g mask="url(#mask0_631_375)">
            <rect x={115} y={22} width={2} height={4} fill="#E2E8F0" />
          </g>
          <mask
            id="mask1_631_375"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x={115}
            y={22}
            width={4}
            height={4}
          >
            <circle
              cx={117}
              cy={24}
              r={2}
              transform="rotate(-180 117 24)"
              fill="#222222"
            />
          </mask>
          <g mask="url(#mask1_631_375)">
            <rect
              x={119}
              y={26}
              width={2}
              height={4}
              transform="rotate(-180 119 26)"
              fill="#E2E8F0"
            />
          </g>
        </svg>
      </span>
    </div>
  );
};

export default Logo;
