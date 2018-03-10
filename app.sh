#!/bin/bash
ember g mu-resource bestuurseenheid naam:string werkingsgebied:uri bestuursorgaan:belongs-to:bestuursorgaan~bestuurseenheid classificatie:belongs-to:bestuurseenheid-classificatie-code  
ember g mu-resource bestuurseenheid-classificatie-code label:string  
ember g mu-resource bestuursorgaan naam:string binding-einde:date binding-start:date bestuurseenheid:belongs-to:bestuurseenheid~bestuursorgaan classificatie:belongs-to:bestuursorgaan-classificatie-code is-tijdsspecialisatie-van:belongs-to:bestuursorgaan~heeft-tijdsspecialisaties wordt-samengesteld-door:belongs-to:rechtstreekse-verkiezing~stelt-samen heeft-tijdsspecialisaties:has-many:bestuursorgaan~is-tijdsspecialisatie-van bevat:has-many:mandaat  
ember g mu-resource bestuursorgaan-classificatie-code label:string  
ember g mu-resource kandidatenlijst lijstnaam:string lijstnummer:number lijsttype:belongs-to:lijsttype rechtstreekse-verkiezing:belongs-to:rechtstreekse-verkiezing kandidaten:has-many:persoon  
ember g mu-resource mandaat aantal-houders:number bestuursfunctie:belongs-to:bestuursfunctie-code  
ember g mu-resource bestuursfunctie-code label:string  
ember g mu-resource mandataris rangorde:language-string start:datetime einde:datetime bekleedt:belongs-to:mandaat heeft-lidmaatschap:belongs-to:lidmaatschap~lid is-bestuurlijke-alias-van:belongs-to:persoon~is-aangesteld-als rechtsgronden-aanstelling:has-many:rechtsgrond-aanstelling~bekrachtigt-aanstellingen-van rechtsgronden-beeindiging:has-many:rechtsgrond-beeindiging~bekrachtigt-ontslagen-van tijdelijke-vervangingen:has-many:mandataris beleidsdomein:has-many:beleidsdomein-code status:has-many:mandataris-status-code  
ember g mu-resource mandataris-status-code label:string  
ember g mu-resource beleidsdomein-code label:string  
ember g mu-resource persoon achternaam:string alternatieve-naam:string gebruikte-voornaam:string geboorte:belongs-to:geboorte identificator:belongs-to:identificator geslacht:belongs-to:geslacht-code is-aangesteld-als:has-many:mandataris~is-bestuurlijke-alias-van  
ember g mu-resource geslacht-code label:string  
ember g mu-resource rechtsgrond-aanstelling buitenwerkingtreding:date inwekingtreding:date type-document:uri-set bekrachtigt-aanstellingen-van:has-many:mandataris~rechtsgronden-aanstelling  
ember g mu-resource rechtsgrond-beeindiging buitenwerkingtreding:date inwekingtreding:date type-document:uri-set bekrachtigt-ontslagen-van:has-many:mandataris~rechtsgronden-beeindiging  
ember g mu-resource verkiezingsresultaat aantal-naamstemmen:number plaats-rangorde:number is-resultaat-van:belongs-to:persoon is-resultaat-voor:belongs-to:kandidatenlijst gevolg:belongs-to:verkiezingsresultaat-gevolg-code  
ember g mu-resource verkiezingsresultaat-gevolg-code label:string

