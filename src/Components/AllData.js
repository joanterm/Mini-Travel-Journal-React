import data from "../data.js"
import Card from "./Card.js"

const AllData = () => {

    const allData = data.map((e) => {
      return <Card element={e} key={e.id} />
  })
    return ( 
        <div>
            {allData}
        </div>
     );
}
 
export default AllData;