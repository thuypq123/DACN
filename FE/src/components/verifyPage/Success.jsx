import React from 'react'
import Player from "react-lottie-player";
import {Typography} from '@mui/material';
import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";
const animation = // 20230410232608
// https://assets4.lottiefiles.com/packages/lf20_dVOTNsOh1U.json

{
  "v": "4.8.0",
  "meta": {
    "g": "LottieFiles AE 3.4.1",
    "a": "",
    "k": "",
    "d": "",
    "tc": ""
  },
  "fr": 29.9700012207031,
  "ip": 0,
  "op": 60.0000024438501,
  "w": 140,
  "h": 140,
  "nm": "Comp 1",
  "ddd": 0,
  "assets": [
    {
      "id": "image_0",
      "w": 109,
      "h": 115,
      "u": "",
      "p": "data:image/png;base64,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",
      "e": 1
    },
    {
      "id": "comp_0",
      "layers": [
        {
          "ddd": 0,
          "ind": 1,
          "ty": 2,
          "nm": "Layer 1",
          "refId": "image_0",
          "sr": 1,
          "ks": {
            "o": {
              "a": 0,
              "k": 100,
              "ix": 11
            },
            "r": {
              "a": 0,
              "k": 0,
              "ix": 10
            },
            "p": {
              "a": 0,
              "k": [
                70.43,
                70.155,
                0
              ],
              "ix": 2
            },
            "a": {
              "a": 0,
              "k": [
                54.209,
                57.125,
                0
              ],
              "ix": 1
            },
            "s": {
              "a": 0,
              "k": [
                100,
                100,
                100
              ],
              "ix": 6
            }
          },
          "ao": 0,
          "ip": 0,
          "op": 900.000036657751,
          "st": 0,
          "bm": 0
        }
      ]
    }
  ],
  "layers": [
    {
      "ddd": 0,
      "ind": 1,
      "ty": 0,
      "nm": "Loading",
      "refId": "comp_0",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 1,
          "k": [
            {
              "i": {
                "x": [
                  0.833
                ],
                "y": [
                  0.833
                ]
              },
              "o": {
                "x": [
                  0.167
                ],
                "y": [
                  0.167
                ]
              },
              "t": 0,
              "s": [
                0
              ]
            },
            {
              "t": 60.0000024438501,
              "s": [
                360
              ]
            }
          ],
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [
            70,
            70,
            0
          ],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [
            70,
            70,
            0
          ],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [
            100,
            100,
            100
          ],
          "ix": 6
        }
      },
      "ao": 0,
      "w": 140,
      "h": 140,
      "ip": 0,
      "op": 900.000036657751,
      "st": 0,
      "bm": 0
    }
  ],
  "markers": [
    
  ]
}

const Success = () => {
  return (
    <div style={{display:'block', margin:'auto',alignItems: 'center',justifyContent: 'center'}} className="success">
      <Player style={{ width: "300px", height: "300px" }} animationData={animation} play loop />
      <Typography style={{ color:'white', fontSize:35}}>Xác nhận thành công!</Typography>
      <BubblyLink className="button_verify" colorStart="white" to='/products' style={{color: 'black'}}><button style={{background:'white', height:50, width:200, margin:'20px 50px', color:'black'}}>Trang chủ</button></BubblyLink>
    </div>
  )
}

export default Success