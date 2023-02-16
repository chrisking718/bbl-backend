const db = require('../db/dbConfig')

const getAllSites = async () => {
    try{
        const allSites = await db.any("SELECT * FROM sites")
        return allSites
    }catch (e){
        return e
    }
}

const getSite = async (id) =>{
    try{
        const oneSite = await db.one('SELECT * FROM sites WHERE id=$1', id)
        return oneSite
    }catch(e){
        return e
    }
}

const createSite = async (site) =>{
    try{
        const newSite = await db.one('INSERT INTO sites(name , website, address, description, price, category, picture ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',[
            site.name, site.website, site.address, site.description, site.price, site.category, site.picture
        ])
        return newSite
    }catch (e){
        return e
    }
}

const deleteSite = async (id) => {
    try{
        const deletedSite = await db.one('DELETE FROM sites WHERE id=$1 RETURNING *', id)
        return deletedSite
    }catch (e){
        return e
    }
}

const updateSite = async(id,site) => {
    try{
        const updatedSite = await db.one('UPDATE sites SET name=$1 , website=$2, address=$3, description=$4, price=$5, category=$6, picture=$7 WHERE id=$8 RETURNING * ',[
            site.name, site.website,site.address, site.description,  site.price, site.category, site.picture, id
        ])
        return updatedSite
    }catch (e){
        return e
    }
}
module.exports = {getAllSites,getSite, createSite, deleteSite, updateSite}