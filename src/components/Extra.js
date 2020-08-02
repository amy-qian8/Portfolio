import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";

import CaseDormImg from "../images/casedorm.jfif";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "var(--theme-bg)",
    height: "100%",
    overflow: "hidden",
  },
  cardContainer: {
    display: "flex",
    maxWidth: "40rem",
    margin: "5rem auto",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "0 0 auto",
  },
  cover: {
    width: "300%",
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center" style={{ padding: "0 2rem" }}>
        {/* Extracurricular 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5" gutterBottom>
                  Society of Women Engineers Co-President
                </Typography>
                <img src="data:image/jpeg;base64,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"></img>
                <Typography variant="body1" color="textSecondary" component="p">
                  I love SWE because of how we empower women to pursue
                  engineering. We coordinate events with companies to host
                  workshops on campus (and now virtually) like resume workshops,
                  recruiting information sessions, etc. We help send Mudd
                  student to the National SWE Conference. Also, we host WEST
                  Conference for high school girls to encourage girls to pursue
                  a STEM major. I love leading a club that has such a positive
                  impact!
                </Typography>
              </CardContent>
            </div>
            {/* <CardMedia
              className={classes.cover}
              image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQHBhUQExIVFhUXGRgZFxcXFxcYFxsbFxgYGBgYGhgYHSggGCYsHxcaIjUhJy0rLi4uGCAzODMtNygtLisBCgoKDg0OGw8QFS8lHR8tLS0vLy0rLSstKy0rLS0tLS0tLS0tLS0tLS0rLS0tLS0rLSstOC0tKy0tKy0tKy0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAwEAAwEAAAAAAAAAAAAABQYHAwIECAH/xABAEAACAQIDBAcFBAgGAwAAAAAAAQIDEQQFIQYHEjEiQVFhcYGRExQyobEVYnKSFiNCUlSCotGywcLS4eIXc5P/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgEDBP/EACARAQEBAAICAgMBAAAAAAAAAAABAhExAyEiQRJhcVH/2gAMAwEAAhEDEQA/ANxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5YmvHC4eVSTtGMXKT7FFXb9EB1Bk2aby69XFXoQhCmnoprilLx1tHwXqaRs/m0c7yqFeGnEukv3ZLSUfJlXFnuiRB+SdkZXne8atDOZLD8HsYuyUo347c5Xvdd1uqwzm66GqghNktoY7R5a6qi4yi+Gcb3s7J6PrWpNk30AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeFSmqtNxkk0000+TT0aPM4Y3GQwGHdSpOMIrVuTsv+fADCNqMp+xM8qUL3ineL+7JXjf6eR+ZHtBXyKo3RnZP4otXg+9p9ferMuO2GzFTP8U8dhakK8ZJLgi0muFWsnez8HZkps9u5o4agpYle1qPVxu1CPdpbi8Xp3Ho/PP4+xSs223xeaYV0pTUYvSSpx4W12N3bt4WK29EbbmGwmCxlGyo+zfVKm3Fry5PzRTIbtascdNVa0IUI6+10u48/hekbdbfzGfJkX3Y7JlkmQwp/tyXHUfbKSV/TReROERkueYbHp0qNeNR07Reursl0ly4l3rQl7nC9+wABgAAAAAAAAAAAAAAAAAAAAAAAAAADNt7uOqUqtClGcoxanJpNq7Tile3O1/mZxOo6nOTfi2/qb1n+ztDaCnFVovo34XF2kr81fyK1mG7LD1MO/Y1KkJ204mpRv3qyfoztjeZOBVd11SS2pUVKSi4Tbim7SstLrk+ZspgOAxNTZjaFScenSm1KN+a5SV+9PR+DNxynNKWb4NVaU1KL9U+yS6mZ5Z75HulJ3swvs3F3atVjpfR3Uua6+3yLrKXDG75IyLeTtLHN8VGhSfFTpttyXKU+Wnakr697J8c50KWnZ3JbZjHVMNtDQcZy1qQi1d2alJJprr0ZaNjdgY5ngViMRKSjLWEI6Nr96T6r9i9dSXxeX5Xsfi41ZcXtY6whxSnLufDey8WdtbnQvoM+lvTpKWmHqNdrlFfIlsn2/wmZVVBuVKT0SqJJN90k2vWxwuNT6FrBBbS7T09nVB1IVJKd7OCi1eNtHdrt+TPHZvayjtFVnCmpxlBJtTSV09LqzfX9TOLxyJ8Ajc/zqnkOXutVu1dJKNm23ySu13vyMEkCsbP7cUM9zD2EI1ITabXGo2dtWk03rbUs5tlnYA9TNMwhlWAnXqNqEFd21fYkl16uxXMq2/oZrmMKEKVbim7K6hZaNtu0uxNiS0W4H45cMbvkVLNt4eEwFRxi5VpLn7O3D+ZtJ+VxJb0LcDP6e9Ki59LD1Uu1OL+Whacm2ioZ5SboTTkldwl0ZLxXO3erm3NncEuCIwmbyr4iEHRacrXak3FJ0nUvdxV3e0bd9+qxLkgAAAAAAAAAcsVGUsNJQaUnF8LfJOzs35gYtvFxEMRtbVcNbcMZNfvRjZ/28iv4fG1MDJzpVJ05W5wk4v1R1zLA1cuxbp14yjO+vF196f7XijVdgNlIZfl0a9amnWmuLpK/BF/CknydtX162PTdTORBb1cTNU8LDjlwypyco8TtJrg1a5Pn1meSWh9DZtlNHN8I6dWmpK2jt0o98XzizCs8ymeT5vPDyTbT6Lt8UX8Ml23XzujPFqccDaKObQo7JLFQ1hGjxJfhj8PqrGLYanUz/Ooxcr1K07OT7Xzfgl1dxpOxmQ1nsbXw9ZOCrcXs4y5xUo2u11a627u8zJxq5PmWqdOrSlfvUl19/0aHjk5vA1TDbtMJToJTdWcuuXFw+iSsvmQ2abrpe2Xu9dcLeqq3ul1tOK6Xg0vE7ZPvPi4qOJpNPrnT1Xi4vVeTZdcoz7D5zTvRqxk+uOqkvGLs0c7d57EBtvka/Qj2cLv3dRlFt3doK0v6bmf7AY/7P2qpPqnem/5+X9SibdVpqvScZK6aaa7U1Zo+eswwsspzWdK/SpTaT/C+i/oyvH7lg+iDLt7uY+0xtLDJ6QTqS8ZaR+SfqaNlmNWPy2nXXKcIy8Lq7RieaVXtLtdLh19rVUI/hTUIv8AKr+pPinvn/B6WUYyWT5zSrNNcE4ya+67X9Yt+p9BQlxRutU+Rj287KVl2dQnFWhUpxS8aaUGvyqBoOwOY/aWy9KTd5QXs5eMNF/TwvzK8nuTQhN7eYexyinQT1qT4n+Gmv7yj6ELuly722a1MQ1pTjwx/FP/AKp/mI/eZmHvu1EoJ6UoqC8fil83byL9u8wH2dspCTWtS9V+Evh/pURfjj+iqbzdppVsY8FTk1CNvatftStfh8Fp4vwPW2L2G+2sMsRWlKFJvoRj8UraN3fwrq7/AK07F13isVOo3rOUpN98m3/maDgd5VPBYKFKOFlwwior9YuUVbsLsszxkTeJ3bYOpRtD2kJdUlNy9VLT6GbZhg6+yefcPFapBqUJrlKL5Pweqa8UXX/ypD+Fl/8ARf7SqbZ7SR2kxNOapOm4RcXeSle7TXJePqZib54vQ2DZ7NVnWT08QlbiWq7JLSS9UyRKPukquez9SL5Rqyt5xg/qy8HDU4vAAAwAAAAAAAAc6tCNW3FFStqrpOz7VfkdAAB4SpRlNScU2uTsrrwfUeYAEVnez2HzuH66mm1yktJrwkvo9D2c3zGGU5dOvUfRgr97fVFd7enmVDJN5VHF1XGvD2PZK7nHwbSTXpYqS9wR2a7r3FOWHrX+5VX+uP8AYolSnWyXMrPipVab8GnzWvWvk0zbqm1ODp0eJ4qjbunFv8qdzH9r83jnmfzrQTUejGN1q1FWu13u+ngdvHrV9UbFspmjznIKVd/FJNS7OKLcX81fzM53rZd7rn0ayWlWGv4oWT+TiaHsblzyrZqjSkrStxSXY5tya8r28iL3n5d77sy5pdKlJT8uUvk7+RzxeNCv5DtB7ru1ra9Om5Uo9v6zWL8uJ/lI7dVlvvWfus1pRjdfineK+XEVGOIlHCOlfoylGTXfFSS+U2a9uwy73LZpVGulWk5+Xwx+Sv8AzHTfxl/Y8d6OXe+bN+0S6VGSl/K+jL6p+RXd1ObLCPEUZvoqHtl/JpP5OPoaZjsLHG4KdKXwzjKL8JJp/U+fm55XjKkL2klUpS8HeEkT4/lm5HXC0p59nsYv4q9TXu43eT8ld+Rv8aKp0FBaJLhS7ElZGT7qMu95z2ddrSlDT8U9F8lI1vqM8t98D5xxVJ4fETg+cZSj5xbX+Rt+X5BgsZgKdVYWi1OMZLoR60mUHebkEsBmrxUV+qqvV9UZ21T8efi2dNh9uFlGG93xCk6afQmtXG/OLXWr3emqL1zrMsGhfotg/wCFo/kiP0Wwf8LR/JE9WW3GBVPi94j4cM7+lirZ3vOanw4Wkrdc6qevhCLVvFvyOUzqjQ8DgaeAo8FKnGEb3tFJK769D2CM2dzZZ3lFPEKLjxLVPqadnZ9autGSZAAAAAAAAAAAAAAAAA4YzCQxuHdOpFThLRxkrplDzXdfCpNyw9Zw+5NcS8pXTXnc0MGzVnQyeG6/EOetail2rjb9OFfUtOzewNHJ66qzk61RaxbVoxfao6697foW8FXer9gcsXh1isNKnJXjKLi13SVmdQQMxjuqlfXFRt/63f8AxGk4TDrCYWFOPwwiorwirL6HUFXVvYFE2j3efa+cTxEK6hx2bi4cWtrN34lztcvYMmrOhA7H7OrZvLpU+NTlKTlKSXD1JJWu+VvmTwAt59jlicNHF0JU5xUoyVnFq6aKFm27CnVqOWHrOn9ya4l5SumvO5oQE1Z0MnhuvxDnrXopdq42/Sy+pP5Nu1oYOop1pus1+zbhh5q7cvXyLyCr5NX7HjCCpwUUkklZJaJJckl1HkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q=="
              title="Case Dorm"
            /> */}
          </Card>
        </Grid>

        {/* Extracurricular 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5" gutterBottom>
                  Case Dorm President
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  I love being able to foster dorm culture among all the Case
                  Dorm residents especially during the pandemic while we are
                  hosting most events online. We lead dorm meetings and help
                  plan dorm events with Residential Life. Also, we attend ASHMC
                  Senate Meetings, discussing and voting on important topics
                  like budget requests.
                </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.cover}
              image={CaseDormImg}
              title="Case Dorm"
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
