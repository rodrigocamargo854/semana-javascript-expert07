export default class HandGestureService{
    #finferpose
    #handPoseDetection
    #handsVersion
    #detector = null
    constructor({fingerpose,handPoseDetection,handsVersion}){
        this.#finferpose = fingerpose
        this.#handPoseDetection = handPoseDetection
        this.#handsVersion = handsVersion
    }

    async estimateHands(video){
        return this.#detector.estimateHands(video,{
            flipHorizontal:true
        })
    }

    async initializeDetector(){
        //se o detector ja tiver dados ja retornamos ele
        if(this.#detector) return this.#detector

        const detectorConfig = {
            runtime : 'mediapipe',
            solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/hands@${this.#handsVersion}`,
            // o model full é o mais pesado e mais preciso , porem iremos utilizar o lite 
            modelType:'lite',
            maxHands:2,
        }
        this.#detector = await this.#handPoseDetection.createDetector(
            this.#handPoseDetection.SupportedModels.MediaPipeHands,
            detectorConfig
        )

        return this.#detector
    }
}