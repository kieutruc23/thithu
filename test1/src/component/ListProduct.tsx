import { deleteProduct, getAllproduct } from "../action/Product"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { useEffect } from 'react'
import { Link } from "react-router-dom"
const ListProduct = () => {
    const dispatch = useAppDispatch()
    const { products } = useAppSelector((state) => state.products)
    console.log(products)
    const newData = products?.data
    useEffect(() => {
        dispatch(getAllproduct())
    }, [])
    const onhandelRemove = async (id: any) => {
        if (window.confirm("Bạn có muốn xoá sản phẩm này không?")) {
            window.location.reload();
            await dispatch(deleteProduct(id));

        }
    }

    return (
        <div>
            <button><Link to={"/add"}>thêm sản phẩm</Link> </button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">price</th>
                        <th scope="col">dec</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    {newData?.map((item: any, index: any) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.dec}</td>
                            <td>
                                <button onClick={() => onhandelRemove(item.id)}>xoá</button>
                                <button><Link to={`/edit/${item.id}`}>suửa</Link></button>
                            </td>
                        </tr>
                    ))}



                </tbody>
            </table>
        </div>
    )
}

export default ListProduct