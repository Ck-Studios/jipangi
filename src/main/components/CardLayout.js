export default function CardLayout(props) {
  return (
    <div className="mobile:w-full tablet:w-full laptop:max-w-xs desktop:max-w-xs  rounded-lg overflow-hidden shadow-lg">
      <img className="w-full " src="/static/images/view1.jpg" alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base overflow-hidden whitespace-normal" style={{height: 50, textOverflow: "ellipsis", "-webkit-line-clamp": 2, "-webkit-box-orient": "vertical", wordWrap: "break-word", display: "-webkit-box"}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
            eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 py-4">
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
        </div>
    </div>
  )
}
