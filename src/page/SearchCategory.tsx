import { Box, Paper, Typography, Button, Card, IconButton, Fab } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ReactComponent as YogaMatIcon } from '../assets/icons/mat_yoga_icon.svg'
import { ReactComponent as BookIcon } from '../assets/icons/library_book_icon.svg'
import { ReactComponent as AudioIcon } from '../assets/icons/audio_sound_speaker_icon.svg'
import { ReactComponent as AllIcon } from '../assets/icons/spiral_light_icon.svg'
import bookIconSmall from '../assets/icons/small_size/library_book_icon_small.svg'
import audioIconSmall from '../assets/icons/small_size/audio_sound_speaker_icon_small.svg'
import { ItemType, Item } from "../utils/types";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const SearchCategory = () => {
    const [data, setData] = useState<Item[]>([])
    const [chosenFilter, setChosenFilter] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        const url = "http://localhost:4000/items";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setData(json)
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    const renderIconByContentType = (type: string) => {
        switch (type) {
            case ItemType.TEXT:
                return <img src={bookIconSmall} alt="book" />
            case ItemType.AUDIO:
                return <img src={audioIconSmall} alt="audio" />

            default:
                return <></>;
        }
    }

    const filters = [
        {
            title: "הכל",
            icon: <AllIcon stroke={chosenFilter === 0 ? "#0D4665" : "#CCCCCC"} />
        },
        {
            title: "תרגול",
            icon: <YogaMatIcon fill={chosenFilter === 1 ? "#0D4665" : "#CCCCCC"} />
        },
        {
            title: "קריאה",
            icon: <BookIcon fill={chosenFilter === 2 ? "#0D4665" : "#CCCCCC"} />
        },
        {
            title: "אודיו",
            icon: <AudioIcon fill={chosenFilter === 3 ? "#0D4665" : "#CCCCCC"} />
        },
    ]
    return (
        <>
            <Fab sx={{
                position: 'absolute',
                top: 16,
                right: 16,
            }}>
                <IconButton aria-label="back" color="primary" onClick={() => navigate(`/search/category/pain`)}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Fab>

            <Box>
                <Paper variant="elevation" square={false} sx={{
                    height: 180,
                    display: "flex",
                    alignItems: "flex-end",
                    backgroundColor: "#FF7D88"
                }}>
                    <Box sx={{
                        // flex: 1,
                        px: 3,
                        pb: 3
                    }}>
                        <Typography textAlign={"right"} variant="h3" sx={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 48
                        }}>{"כאב"}</Typography>
                    </Box>
                </Paper>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    m: 3,
                }}>
                    {filters.map((filter, i) => (
                        <Button variant="text" onClick={() => setChosenFilter(i)}>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column"
                            }}>
                                {filter.icon}
                                <Typography variant="caption" color={chosenFilter === i ? "#0D4665" : "#CCCCCC"}>{filter.title}</Typography>
                            </Box>
                        </Button>
                    ))}
                </Box>
                <Box mx={4}>
                    {data.map((item, i) =>
                        <Card key={i} sx={{
                            align: "right",
                            my: 2,
                            p: 1.5,
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            alignItems: "center",
                            borderRadius: "20px",
                            backgroundColor: "rgba(233, 111, 125, 0.07)",
                            boxShadow: "none"
                        }} onClick={() => navigate(`/search/item/${item._id}`)}>
                            <Box sx={{
                                height: "86px",
                                m: 1,
                                background: "linear-gradient(to bottom right, #6BD39A, #C0A2E8, #E96F7D)",
                                borderRadius: "6px",
                                display: "flex",
                                alignItems: "center"
                            }}>
                                <Box sx={{
                                }}>
                                    <img src={require(`../assets/png/contentType/${item.type}.png`)} />
                                </Box>
                            </Box>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                flexDirection: "column"
                            }}>
                                <Box>
                                    <Typography sx={{
                                        fontSize: "14px",
                                        fontWeight: "600"
                                    }} align="right">{item.headline}</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        fontSize: "12px"
                                    }} align="right">{(item.subheadline || item.content)?.slice(0, 35) + "..."}</Typography>
                                </Box>
                                <Box sx={{
                                    display: "flex",
                                    my: 1,
                                    alignItems: "center"
                                }}>
                                    <Box sx={{
                                        display: "flex"
                                    }}>
                                        {
                                            renderIconByContentType(item.type)
                                        }

                                    </Box>
                                    <Box sx={{
                                        mx: 1
                                    }}>
                                        <Typography variant="caption" align="right">{item.time}</Typography>

                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <ArrowBackIosIcon />
                            </Box>

                        </Card>
                    )}
                </Box>
            </Box >
        </>
    )
}