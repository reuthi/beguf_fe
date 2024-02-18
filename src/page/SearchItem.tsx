import { Fab, IconButton } from "@mui/material"
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom"
import { Item, ItemType } from "../utils/types"
import SearchItemText from "./SearchItemText"
import SearchItemAudio from "./SearchItemAudio"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const SearchItem = () => {
    const [item, setItem] = useState<Item | null>()
    const navigate = useNavigate()
    const { id } = useParams();
    // const item = data.find(d => d.id === id)

    useEffect(() => {
        const url = `https://guarded-tor-44964-09b363a73f15.herokuapp.com/item/${id}`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setItem(json)
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, [id]);

    const renderByContentType = () => {
        switch (item?.type) {
            case ItemType.TEXT:
                return <SearchItemText item={item} />
            case ItemType.AUDIO:
                return <SearchItemAudio item={item} />
            default:
                return <></>
        }
    }
    return (
        <>
            <Fab sx={{
                // position: 'absolute',
                top: 16,
                right: 16,
                mb: 3
            }}>
                <IconButton aria-label="back" color="primary" onClick={() => navigate(`/search/category/pain`)}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Fab>
            {
                renderByContentType()
            }
        </>
    )
}