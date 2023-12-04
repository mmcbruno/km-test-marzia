import * as React from 'react';
import "./styles.css";
import Box from "@mui/material/Box";
import {StakeProps} from "../../types";
import {InputAdornment, TextField} from "@mui/material";
import {Cancel} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import {useCallback} from "react";
import Button from "@mui/material/Button";

export const CouponStake = (props: StakeProps) => {
    const {stake, setStake, totalOdds, winnings} = props;
    const addedStakeValues = [100, 200, 500, 1000, 2000]

    const clearStake = () => {
        setStake(0)
    }

    const setCurrentStake = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(`stake ${stake}`);
        if (event.target.value === "") {
            setStake(0);
        } else {
            setStake(parseInt(event.target.value))
        }
    }, [setStake, stake]);

    const addToBetSlip = useCallback((event: React.SyntheticEvent<HTMLButtonElement>) => {
        setStake(stake + parseInt(event.currentTarget.value));
    }, [setStake, stake]);


    return <>
        <Box maxWidth="sm" sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 8px"
        }}>

            <Box sx={{
                fontSize: "12px",
                color: "#000c2d99",
                flexGrow: 2
            }}>Stake Amount<br/> (Min ₦50)</Box>
            {/*error helperText="Incorrect entry."*/}
            <TextField
                sx={{
                    fontSize: "12px",
                    color: "#000c2d99",
                    textAlign: "right",
                    maxWidth: "50%"
                }}
                required id="outlined-basic" label="" variant="outlined" size="small" value={stake}
                onChange={setCurrentStake}
                InputProps={{
                    sx: {
                        textAlign: "right",
                        "& input": {
                            textAlign: "right"
                        }
                    },
                    startAdornment: <InputAdornment position="start"
                                                    sx={{
                                                        "& p": {
                                                            fontSize: "12px",
                                                            textAlign: "left",
                                                        }
                                                    }}>₦</InputAdornment>,
                    endAdornment: <InputAdornment position="end">
                        <IconButton
                            onClick={clearStake}
                        >
                            <Cancel sx={{
                                height: "20px",
                                width: "20px"
                            }}/>
                        </IconButton>
                    </InputAdornment>
                }}
            />
        </Box>
        <Box
            maxWidth={"xl"}
            sx={{
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
                backgroundColor: 'rgba(37,93,189,0.2)',
                padding: 1,
                margin: 1,
                display: "flex",
                justifyContent: "space-evenly"
            }}
        >
            {addedStakeValues.map((val, index) =>
                <Button variant="text" key={index} value={val} onClick={addToBetSlip}
                        sx={{
                            fontSize: "14px",
                            fontWeight: "700",
                            color: "#255dbd",
                            textAlign: "center"
                        }}
                >{val}</Button>)}

        </Box>
        <Box maxWidth="sm" sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 8px",
            borderBottom: "1px dashed #000",
            paddingBottom: 1,
            marginRight: 1,
            marginLeft: 1
        }}>

            <Box sx={{
                fontSize: "12px",
                color: "#000c2d99",
                flexGrow: 2
            }}>Total odds:</Box>

            <Box sx={{
                fontSize: "12px",
                color: "#000c2d99"
            }}>{totalOdds}</Box>
        </Box>
        <Box maxWidth="sm" sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 8px",
            marginTop: 1,
            marginRight: 1,
            marginLeft: 1
        }}>

            <Box sx={{
                fontSize: "12px",
                color: "#000c2d99",
                flexGrow: 2
            }}>Net potential winnings</Box>

            <Box sx={{
                color: "#000",
                fontSize: "14px",
                fontWeight: "700",
            }}>{winnings}</Box>
        </Box>

        <Box maxWidth="sm" sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 8px"
        }}>

            <Button variant="outlined" sx={{
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                minHeight: "44px"
            }}>Book</Button>

            <Button variant="contained" sx={{
                flexGrow: 2, marginLeft: 1, borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                backgroundColor: "#1affff",
                color: "#001041",
                minHeight: "44px"
            }}>Place Bet</Button>
        </Box>

    </>
};
