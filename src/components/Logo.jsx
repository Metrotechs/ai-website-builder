export default function Logo(props) {
  let fillColor = props.fillColor || 'black'
  return (
    <span id="logo-text" className={"font-semibold text-xl text-" + fillColor}>Folio</span>
  )
}

{/*   <svg width="96" height="96" viewBox="0 0 248 248" fill="none" xmlns="http://www.w3.org/2000/svg">
 <g clip-path="url(#clip0_1_15)">
<path d="M124 62C124 96.2417 96.2417 124 62 124C27.7583 124 0 96.2417 0 62C0 27.7583 27.7583 0 62 0C96.2417 0 124 27.7583 124 62Z" fill="#E4E4E4"/>
<path d="M248 62C248 96.2417 220.242 124 186 124C151.758 124 124 96.2417 124 62C124 27.7583 151.758 0 186 0C220.242 0 248 27.7583 248 62Z" fill="#223252"/>
<path d="M248 186C248 220.242 220.242 248 186 248C151.758 248 124 220.242 124 186C124 151.758 151.758 124 186 124C220.242 124 248 151.758 248 186Z" fill="#E4E4E4"/>
<path d="M124 186C124 220.242 96.2417 248 62 248C27.7583 248 0 220.242 0 186C0 151.758 27.7583 124 62 124C96.2417 124 124 151.758 124 186Z" fill="#223252"/>
<path d="M52.766 52.766H195.234V195.234H52.766V52.766Z" fill="#223252"/>
<path d="M83.7386 153V94.8182H121.011V103.653H94.2784V119.449H118.455V128.284H94.2784V153H83.7386ZM145.99 153.852C141.729 153.852 138.036 152.915 134.911 151.04C131.786 149.165 129.361 146.542 127.638 143.17C125.933 139.799 125.081 135.86 125.081 131.352C125.081 126.845 125.933 122.896 127.638 119.506C129.361 116.116 131.786 113.483 134.911 111.608C138.036 109.733 141.729 108.795 145.99 108.795C150.251 108.795 153.945 109.733 157.07 111.608C160.195 113.483 162.609 116.116 164.314 119.506C166.037 122.896 166.899 126.845 166.899 131.352C166.899 135.86 166.037 139.799 164.314 143.17C162.609 146.542 160.195 149.165 157.07 151.04C153.945 152.915 150.251 153.852 145.99 153.852ZM146.047 145.614C148.357 145.614 150.289 144.979 151.842 143.71C153.395 142.422 154.551 140.699 155.308 138.54C156.085 136.381 156.473 133.975 156.473 131.324C156.473 128.653 156.085 126.239 155.308 124.08C154.551 121.902 153.395 120.169 151.842 118.881C150.289 117.593 148.357 116.949 146.047 116.949C143.679 116.949 141.71 117.593 140.138 118.881C138.585 120.169 137.42 121.902 136.643 124.08C135.886 126.239 135.507 128.653 135.507 131.324C135.507 133.975 135.886 136.381 136.643 138.54C137.42 140.699 138.585 142.422 140.138 143.71C141.71 144.979 143.679 145.614 146.047 145.614Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1_15">
<rect width="248" height="248" fill="white"/>
</clipPath>
</defs>
</svg> */}

