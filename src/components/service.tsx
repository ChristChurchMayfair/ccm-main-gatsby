import { FC } from "react"
import React from "react"
import styles from "./services.module.scss"
import Img, { FluidObject } from "./img"
import { getNextServiceTimes } from "./servicetimes/service-times"
import { format } from "date-fns"
import { parseISO } from "date-fns/esm"

export type Session = {
    dateTime: Date
    description: string
    link?: string
}

type ServiceProps = {
    id: string
    name: string
    image: FluidObject
    htmlDescription: string
    schedule: Session[]
    normalTime: string
}

const Service: FC<ServiceProps> = ({
    id,
    name,
    image,
    htmlDescription,
    schedule,
    normalTime,
}) => {
    let sessions = [
        <div key="onlysession" className={styles.session}>
            <div className={styles.sessionTime}>{normalTime}</div>
            <div className={styles.sessionDescription}>regular service</div>
            <div className={styles.streamlink}>in person only</div>
        </div>,
    ]

    let dateSpecifier = ""

    if (schedule.length > 0) {
        const nextServiceTimes = getNextServiceTimes(
            schedule.map((service: Session) => service.dateTime),
            new Date()
            // parseISO("2020-08-30T18:00:00+01:00") # Use this for testing
        )

        if (nextServiceTimes.length > 0) {
            dateSpecifier =
                "Timings for " + format(nextServiceTimes[0], "do MMMM y")
        }

        const nextServices = nextServiceTimes.map(serviceTime =>
            schedule.find(
                service => service.dateTime.getTime() === serviceTime.getTime()
            )
        )

        sessions = nextServices.map(service => {
            let streamlink = (
                <div className={styles.streamlink}>In Person Only</div>
            )
            if (service?.link != undefined) {
                streamlink = (
                    <a
                        className={styles.streamlink}
                        href={service?.link}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                    >
                        Watch online
                    </a>
                )
            }

            return (
                <div
                    key={service?.dateTime.getTime()}
                    className={styles.session}
                >
                    <div className={styles.sessionTime}>
                        {format(service?.dateTime!, "h.mm aaaa")}
                    </div>
                    <div className={styles.sessionDescription}>
                        {service?.description}
                    </div>
                    {streamlink}
                </div>
            )
        })
    }

    return (
        <div key={id} className={styles.service}>
            <div className={styles.photo}>
                <Img fluid={image} />
            </div>
            <div className={styles.title}>{name}</div>
            <div className={styles.dateSpecifier}>{dateSpecifier}</div>
            <div className={styles.sessions}>{sessions}</div>
            <div
                className={styles.info}
                dangerouslySetInnerHTML={{
                    __html: htmlDescription,
                }}
            />
        </div>
    )
}

export default Service
