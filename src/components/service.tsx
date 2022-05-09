import { FC } from "react"
import React from "react"
import styles from "./services.module.scss"
import Img, { FluidObject } from "./img"
import { getNextServiceTimes } from "./servicetimes/service-times"
import { format } from "date-fns"
import classNames from "classnames"

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
    streamLink: string
    description: string
}

const Service: FC<ServiceProps> = ({
    id,
    name,
    image,
    htmlDescription,
    schedule,
    normalTime,
    description,
    streamLink,
}) => {
    let sessions = [
        <div key="onlysession" className={styles.session}>
            <div className={styles.sessionTime}>{normalTime}</div>
            <div className={styles.sessionDescription}>{description}</div>
            <a
                className={styles.streamlink}
                href={streamLink}
                target={"_blank"}
                rel={"noopener noreferrer"}
            >
                Watch online
            </a>
        </div>,
    ]

    let dateSpecifier = ""

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

    if (nextServices.length !== 0) {
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
                        {format(service!.dateTime, "h.mm aaaa")}
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
            <div
                className={classNames(styles.sessions, {
                    [styles["sessions--one"]]: sessions.length == 1,
                    [styles["sessions--two"]]: sessions.length % 2 == 0,
                    [styles["sessions--three"]]: sessions.length == 3,
                })}
            >
                {sessions}
            </div>
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
