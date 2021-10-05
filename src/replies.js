const replies = {
    beg: [
        `You beg and get {payment} credits for 1 day worth of begging!`,
        `Eh you tell your friend you don't have money so they give you {payment} credits!`,
        `You beg at random people at street and he only give you {payment} credits!`
    ],
    work: [
        `You work as a developer and get paid {payment} credits!`,
        `Sneaky found your comment funny and gave you {payment} credits! for being the funniest person on the job site.`,
        `You work as a network security developer and earn {payment} credits!`,
        `You over slept but still made it to work on time and you work the fastest you ever have, so your boss gives you {payment} credits!`,
        `You hit your daily target at work so your boss gives you {payment} credits!`,
        `Your neighbor gave you {payment} credits for cleaning their yard!`,
        `You work on a project with Microwave and report an error in Microwaves to Sneaky and he gives you {payment} credits!`,
        `The Chairman pays you with {payment} credits for washing their car.`,
        `You got rewarded with {payment} credits for delivering the mail.`,
        `{payment} credits were transferred to your bank account for helping the developers.`,
        `You got {payment} credits for fixing the your neighbour house.`,
        `You worked as a discord moderator and discord gave you {payment} credits.`,
        `You worked as a tiktoker and uploaded a video. Fortunately it got popular and you received {payment} credits.`,
        `You worked as a graphics designer and received {payment} credits!`,
        `You saw sneaky having issues with fixing panels. So you decided to help him and sneaky rewarded you with {payment} credits.`,
        `You made a youtube video about sneakyhub hosting and received {payment} credits.`.
        `You worked as a model and recevived {payment} credits.`,
        `You worked as a hitman and recevived {payment} credits.`,
        `You helped sneaky through a ddos attack and recevived {payment} credits.`,
        `You woke up in a random box and recevived {payment} credits.`,
        `You won a beauty contest and recevived {payment} credits.`,
        `You programmed a whole website off of bootstrap and recevived {payment} credits.`,
        `Someone said "Damn you cute bro" and you recevived {payment} credits.`,
        `Some simp donated and you recevived {payment} credits.`,
        `Someone hacked your bank account and you recevived {payment} credits.`
    ]
}

export default beg = (payment) => {
    return replies.beg[Math.floor(Math.random() * replies.beg.count)].replace('{payment}', payment.toLocaleString())
}

export default work = (payment) => {
    return replies.work[Math.floor(Math.random() * replies.work.count)].replace('{payment}', payment.toLocaleString())
}