const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-16.6615881",
        lng: "-49.3229628",
        name: "Lar do amor",
        about: "Presta assistencia a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "62998232408",
        images: [
            "https://images.unsplash.com/photo-1602477722522-df0d7d33f119?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",

            "https://images.unsplash.com/photo-1603047006470-30f6b1196129?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 18h até 8h",
        open_on_weekends: "1"
    })

    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
 
    // consultar somente um orfanato pelo id
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')

    // deletar uma tabela
    // await db.run("DELETE FROM orphanages")
})
