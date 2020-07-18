import {useState, useEffect} from "react";
import {NotionRenderer} from "react-notion/dist";

export default function Notion(props) {
  const [detailData, setDetailData] = useState(null);

  async function fetchDetailData(pageID) {
    try {
      const _data = await fetch(
        "https://notion-api.splitbee.io/v1/page/" + pageID
      ).then(res => res.json());
      await setDetailData({blockMap: _data})
    } catch (err) {
      console.log("err", err);
    }
  }

  useEffect(() => {
    fetchDetailData(props.url)
  }, []);

  return detailData ? (
    <div className="w-full h-full">
      <NotionRenderer blockMap={detailData?.blockMap}/>
    </div>
    )
    :
    <p>로딩중입니다...</p>
}
