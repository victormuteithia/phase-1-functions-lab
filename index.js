function distanceFromHqInBlocks(blockNumber){
    const hqBlock = 42
    if(blockNumber < 42){
        return hqBlock-blockNumber
    }
    return blockNumber-hqBlock
    }

function distanceFromHqInFeet(blockNumber){
        return distanceFromHqInBlocks(blockNumber)*264
    }

function distanceTravelledInFeet(blockNumber,blockDestination){
        if(blockNumber > blockDestination){
            return (blockNumber-blockDestination)*264
        }
        return (blockDestination-blockNumber)*264
    }

function calculatesFarePrice(blockNumber,blockDestination){
    if(distanceTravelledInFeet(blockNumber,blockDestination) <= 400){
        return 0
    }else if(distanceTravelledInFeet(blockNumber,blockDestination) <= 2000){
        return (distanceTravelledInFeet(blockNumber,blockDestination) - 400) * 0.02
    }else if(distanceTravelledInFeet(blockNumber,blockDestination) <= 2500){
        return 25
    }else if(distanceTravelledInFeet(blockNumber,blockDestination) > 2500){
        return 'cannot travel that far'
    }
}

