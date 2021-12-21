import data from "../data.js"
import Card from "./Card.js"

const AllData = () => {
    // const [favorite, setIsFavorite] = useState(false)

    // const toggleFavorite = () => {
    //     console.log("click")
    //     setDestinationData((prev) => {
    //         return !prev
    //     })
    // }

    const allData = data.map((e) => {
    //   console.log(e)
      return <Card element={e} key={e.id} />
  })
    return ( 
        <div>
            {allData}
        </div>
     );
}
 
export default AllData;