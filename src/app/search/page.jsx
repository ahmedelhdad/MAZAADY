/* eslint-disable react-hooks/rules-of-hooks */
'use client'



import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
const page = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [models, setModels] = useState([])
    const [brand, setBrand] = useState([])
    const [process, setProcess] = useState([])
    const [transmission, setTransmission] = useState([])
    const [fuel, setFuel] = useState([])
    const [condition, setCondition] = useState([])
    const [color, setColor] = useState([])
    const [odometerUnit, setOdometerUnit] = useState([])
    const [cylinders, setCylinders] = useState([])
    const [drive, setDrive] = useState([])
    const [categories, setCategories] = useState([])
    const [slug, setSlug] = useState([])
    useEffect(() => {
        const getData = async () => {
            const respons = await axios.get('https://staging.mazaady.com/api/v1/properties?cat=13 (sub-category id)', {
                headers: {
                    "private-key": '3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16'
                }

            })
            const { data } = await axios.get('https://staging.mazaady.com/api/v1/get-options-child/53 (option id)', {
                headers: {
                    "private-key": '3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16'
                }

            })
            const sulg = await axios.get('https://staging.mazaady.com/api/v1/get_all_cats', {
                headers: {
                    "private-key": '3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16'
                }

            })
            //   console.log(sulg.data.data.categories)
            if (respons.data.data && data.data && sulg.data.data) {
                setCategories(sulg.data.data.categories)
                setSlug(sulg.data.data.categories[0].children)
                setModels(data.data[0].options)
                setProcess(respons.data.data[0].options)
                setBrand(respons.data.data[1].options)
                setTransmission(respons.data.data[2].options)
                setFuel(respons.data.data[3].options)
                setCondition(respons.data.data[4].options)
                setColor(respons.data.data[5].options)
                setOdometerUnit(respons.data.data[7].options)
                setCylinders(respons.data.data[8].options)
                setDrive(respons.data.data[9].options)
                setIsLoading(false)
            }
        }
        getData()
    }, [])

    const filterHandler = (e) => {
        const filterSlug = categories.filter((item) => item.name == e.target.value)
        setSlug(filterSlug[0].children)
    }

    return (
        <>
            {
                isLoading ? 'Loading....' : (
                    <form className='px-10  space-y-4'>
                        <div className=''>
                            <h2>Main Category</h2>
                            <select onChange={filterHandler} className='w-full bg-transparent py-2 px-2 border border-gray-500 '>

                                {
                                    categories.map((type) => {
                                        return (
                                            <Fragment key={type.id}>
                                                <option value={type.name}>{type.name}</option>
                                            </Fragment>
                                        )
                                    })
                                }

                            </select>
                        </div>
                        <div>
                            <h2>Sub Category</h2>
                            <select className='w-full bg-transparent py-2 px-2 border border-gray-500 '>
                                {
                                    slug.map((type) => {
                                        return (
                                            <Fragment key={type.id}>
                                                <option value={type.name}>{type.name}</option>
                                            </Fragment>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <h2>Process Type</h2>
                            <select className='w-full bg-transparent py-2 px-2 border border-gray-500 '>

                                {
                                    process.map((type) => {
                                        return (
                                            <Fragment key={type.id}>
                                                <option value={type.name}>{type.name}</option>
                                            </Fragment>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <input type="text" placeholder='From user' name="" id="" className='w-full bg-transparent py-2 px-2 border border-gray-500 ' />
                        </div>
                        <div>
                            <h2>Brand</h2>
                            <select className='w-full bg-transparent py-2 px-2 border border-gray-500 '>
                                {
                                    brand.map((type) => {
                                        return (
                                            <Fragment key={type.id}>
                                                <option value={type.name}>{type.name}</option>
                                            </Fragment>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <h2>Model</h2>
                            <select className='w-full bg-transparent py-2 px-2 border border-gray-500 '>
                                {
                                    models.map((type) => {
                                        return (
                                            <Fragment key={type.id}>
                                                <option value={type.name}>{type.name}</option>
                                            </Fragment>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <h2>Transmission Type</h2>
                            <select className='w-full bg-transparent py-2 px-2 border border-gray-500 '>
                                {
                                    transmission.map((type) => {
                                        return (
                                            <Fragment key={type.id}>
                                                <option value={type.name}>{type.name}</option>
                                            </Fragment>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <h2>Fuel Type</h2>
                            <select className='w-full bg-transparent py-2 px-2 border border-gray-500 '>
                                {
                                    fuel.map((type) => {
                                        return (
                                            <Fragment key={type.id}>
                                                <option value={type.name}>{type.name}</option>
                                            </Fragment>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <h2>Condition</h2>
                            <select className='w-full bg-transparent py-2 px-2 border border-gray-500 '>
                                {
                                    condition.map((type) => {
                                        return (
                                            <Fragment key={type.id}>
                                                <option value={type.name}>{type.name}</option>
                                            </Fragment>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <h2>Color</h2>
                            <select className='w-full bg-transparent py-2 px-2 border border-gray-500 '>
                                {
                                    color.map((type) => {
                                        return (
                                            <Fragment key={type.id}>
                                                <option value={type.name}>{type.name}</option>
                                            </Fragment>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div>
                            <h2>Odometer Unit</h2>
                            <select className='w-full bg-transparent py-2 px-2 border border-gray-500 '>
                                {
                                    odometerUnit.map((type) => {
                                        return (
                                            <Fragment key={type.id}>
                                                <option value={type.name}>{type.name}</option>
                                            </Fragment>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <h2>Cylinders Unit</h2>
                            <select className='w-full bg-transparent py-2 px-2 border border-gray-500 '>
                                {
                                    cylinders.map((type) => {
                                        return (
                                            <Fragment key={type.id}>
                                                <option value={type.name}>{type.name}</option>
                                            </Fragment>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <h2>Drive</h2>
                            <select className='w-full bg-transparent py-2 px-2 border border-gray-500 '>
                                {
                                    drive.map((type) => {
                                        return (
                                            <Fragment key={type.id}>
                                                <option value={type.name}>{type.name}</option>
                                            </Fragment>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div>
                        <button className='w-full bg-transparent px-2 border border-gray-500 py-3 cursor-pointer text-xl '>Search</button>

                        </div>

                    </form>
                )
            }
        </>
    )
}

export default page