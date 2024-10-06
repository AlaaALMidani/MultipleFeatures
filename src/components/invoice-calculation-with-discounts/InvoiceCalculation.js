import React from 'react'
import { InvoiceCalculationLogic } from './logic';
import { Invoice } from './logic';
import { useState } from 'react'
const InvoiceCalculation = () => {
    const [state, setState] = useState({ logic: new InvoiceCalculationLogic() });
    const [invoice, setInvoice] = useState({ ...new Invoice('', '', '') })

    let onSubmit = (event) => {
        event.preventDefault();
        state.logic.addInvoice(invoice.name, invoice.price, invoice.discount);
        console.log(state.logic)
        setState({ logic: state.logic });
    };
    let onNameChange = (event) => {
        event.preventDefault();
        invoice.name = event.target.value
        setInvoice({ ...invoice, name: event.target.value });
    };
    let onPriceChange = (event) => {
        event.preventDefault();
        invoice.price = event.target.value
        setInvoice({ ...invoice, price: event.target.value });
    };
    let onDiscountChange = (event) => {
        event.preventDefault();
        invoice.discount = event.target.value
        setInvoice({ ...invoice, discount: event.target.value });
    };
    return (
        <div>
            <div className="bg-violet-950 p-3 min-h-screen  ">
                <div className="text-center text-fuchsia-50 font-bold m-5 text-4xl">Invoices Calculation With Discount</div>

                <form
                    onSubmit={onSubmit}
                    className="flex flex-row m-auto  p-5 pt-0 justify-center items-center w-96  rounded-3xl shadow-2xl bg-violet-900 "
                >
                    <div className="flex flex-col m-auto justify-center ">
                        <label className="m-2"><b className="text-amber-500 mr-2">Name: </b></label>
                        <input
                            className="rounded-2xl p-2 text-center  bg-slate-300"
                            type="text"
                            onChange={onNameChange}
                            value={invoice.name}
                        ></input>

                        <label className="m-2"><b className="text-amber-500 mr-2">Price: </b> </label>
                        <input
                            className="rounded-2xl p-2 text-center  bg-slate-300"
                            type="number"
                            onChange={onPriceChange}
                            value={invoice.price}
                        ></input>
                        <label className="m-2"><b className="text-amber-500 mr-2">Discount: </b></label>
                        <input
                            className="rounded-2xl p-2 text-center  bg-slate-300"
                            type="number"
                            onChange={onDiscountChange}
                            value={invoice.discount}
                        ></input>
                    </div>
                    <div onClick={onSubmit} className='h-20 w-20 bg-amber-500 rounded-full text-center content-center text-bol hover:cursor-pointer '>
                       <b>ADD</b> 
                    </div>

                </form>
                {/* Total  */}
                <div className='flex flex-col m-auto mt-8  p-5  justify-center items-center  min-w-36 w-min  rounded-3xl shadow-2xl bg-violet-900 '>
                <b className="text-center text-amber-500 text-xl ">Total</b>
                <b className="text-center text-slate-300 text-xl ">{state.logic.total}</b>
                </div>
                {/* list of invoices */}

                <div className="flex flex-col shadow-2xl min-w-40 bg-violet-900 h-max rounded-2xl p-5  m-8 ml-32 mr-32 " >
                    <div className="font-bold text-center text-amber-500 text-xl ">Invoices Report</div>
                    <div className='flex justify-between mt-6 text-purple-600 text-xl'>
                        <b className='w-32 text-center'>Name</b>
                        <b className='w-32 text-center'>Price</b>
                        <b className='w-32 text-center'>Discount</b>
                        <b className='w-32 text-center'>Final Price</b>
                    </div>
                    {state.logic.invoices.map((invoice) => {
                        return <div className="text-center font-bold text-fuchsia-50">{
                            <InvoiceItem invoice={invoice} />}</div>;
                    })}
                </div>


            </div>

        </div >
    );
}


const InvoiceItem = ({ invoice }) => {
    return (
        <div className='flex justify-between text-slate-300'>
            <b className='w-32 text-center'>{invoice.name}</b>
            <b className='w-32 text-center'>{invoice.price}</b>
            <b className='w-32 text-center'>{invoice.discount}%</b>
            <b className='w-32 text-center'>{invoice.finalPrice}</b>
        </div>
    )
}

export default InvoiceCalculation