
Ex : Search box

1.Requirement Gathering
    a: Functional Reqirement
        -Real Time suggestions
        -Dynamic(api) and static data(local)
        -debouncing
        -highlight match
        -keyboard navigation
        -loading indicator
        -customizable with props
    b: Non Functional Requirements
        - Robust performance
        - Responsive
        - accessibility
        - Security(cross site scripting etx)
        - caching
        - compatibility(in all browser)

2.High Level Design (HLD)

                                                                    _-> fail -> error handling
                                                                    | 
    Input -> Debounce -> cache?--NO-- -> Api-Call -> api response -> success -> update cache -> render suggestions -> highlight matches
                                 |                                                                |
                                yes->--------------------------------------------------------------



3.Low level design (LDD)
    -input ,search btn
    -suggestion div
    -placeholder
    -auto focus
    -onChange
    -debounce depth
    -while loading loader
    -check cache indepth
    -api call in depth
    -on hover /focus what happens
    -on selecting suggestion
    -keyboard enter or serch btn handling
    
    -optimization