const express = require('express')

const {getAllSites, getSite, updateSite,deleteSite,createSite} = require('../queries/sites')

const sites = express.Router()

sites.get("/", async (req , res) => {
    const allSites = await getAllSites()
 
     if(allSites[0]){
         res.status(200).json(allSites)
     }
     else{
         res.status(500).json({error: "server error"})
     }
 })

 sites.get("/:id", async (req,res)=>{
    const {id} = req.params
    const site = await getSite(id)
    if(site.name){
        res.json(site)
    }else{
        res.status(404).json({error: "not found"})
    }
 })

 sites.post('/', async (req,res) =>{
    try{
        const site = await createSite(req.body);
        res.json(site)
    }catch(error){
        res.status(400).json({error:error})
    }
 })


sites.delete('/:id', async (req,res) =>{
    const {id} = req.params
    const deletedSites = await deleteSite(id)
    if(deletedSites.id){
        res.status(200).json(deletedSites)
    }else{
        res.status(404).json({error: "Sites not found"})
    }
})

sites.put('/:id', async (req,res) =>{
    const {id} = req.params;
    const updatedSites = await updateSite(id, req.body);
    res.status(200).json(updateSite)
})

module.exports = sites