var documenterSearchIndex = {"docs":
[{"location":"#LayeredArrays","page":"Home","title":"LayeredArrays","text":"","category":"section"},{"location":"#Introduction","page":"Home","title":"Introduction","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"LayeredArrays provides layer-wise array computation written in the Julia programming language. The layers have hierarchical structure, and lower layers can be accessed by using getindex in AbstractLayeredArray. All types except subtypes of AbstractLayeredArray are on bottom layer 0. The layer-wise operations are simply available by using broadcast operations. This framework is useful for following index notation.","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> xᵢ = @layered 3 [1,2,3]\n3-element LayeredVector{3, Int64, Vector{Int64}}:\n 1\n 2\n 3\n\njulia> yⱼ = @layered 2 [4,5,6]\n3-element LayeredVector{2, Int64, Vector{Int64}}:\n 4\n 5\n 6\n\njulia> zₖ = @layered 1 [7,8,9]\n3-element LayeredVector{1, Int64, Vector{Int64}}:\n 7\n 8\n 9\n\njulia> Aᵢⱼₖ = @. xᵢ * yⱼ + zₖ * yⱼ;                   # layerof(Aᵢⱼₖ) == 3\n\njulia> Aᵢⱼₖ[1] == @. xᵢ[1] * yⱼ + zₖ * yⱼ             # layerof(Aᵢⱼₖ[1]) == 2\ntrue\n\njulia> Aᵢⱼₖ[1][2] == @. xᵢ[1] * yⱼ[2] + zₖ * yⱼ[2]    # layerof(Aᵢⱼₖ[1][2]) == 1\ntrue\n\njulia> Aᵢⱼₖ[1][2][3] == xᵢ[1] * yⱼ[2] + zₖ[3] * yⱼ[2] # layerof(Aᵢⱼₖ[1][2][3]) == 0\ntrue","category":"page"},{"location":"","page":"Home","title":"Home","text":"Note that the layer-wise broadcasting operations are always lazily evaluated.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"pkg> add LayeredArrays","category":"page"},{"location":"#Types-and-Functions","page":"Home","title":"Types and Functions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Modules = [LayeredArrays]\nOrder   = [:type, :function, :macro]","category":"page"},{"location":"#LayeredArrays.AbstractLayeredArray","page":"Home","title":"LayeredArrays.AbstractLayeredArray","text":"AbstractLayeredArray{layer, T, N}\n\nSupertype for N-dimensional layered arrays with elements of type T.\n\n\n\n\n\n","category":"type"},{"location":"#LayeredArrays.LayeredArray","page":"Home","title":"LayeredArrays.LayeredArray","text":"LayeredArray(x)\nLayeredArray{layer}(x)\n\nConstruct LayeredArray on layer (layer = 1 by default).\n\nSee also @layered.\n\nExamples\n\njulia> x = LayeredArray([1,2,3])\n3-element LayeredVector{1, Int64, Vector{Int64}}:\n 1\n 2\n 3\n\njulia> y = LayeredArray{2}([4,5,6])\n3-element LayeredVector{2, Int64, Vector{Int64}}:\n 4\n 5\n 6\n\njulia> x .* y\n3-element LazyLayeredVector{2, LazyLayeredVector{1, Int64, Base.Broadcast.Broadcasted{LayeredArrays.LayeredArrayStyle{1}, Nothing, typeof(*), Tuple{LayeredVector{1, Int64, Vector{Int64}}, Base.RefValue{Int64}}}}, Base.Broadcast.Broadcasted{LayeredArrays.LayeredArrayStyle{1}, Nothing, typeof(*), Tuple{Base.RefValue{LayeredVector{1, Int64, Vector{Int64}}}, LayeredVector{2, Int64, Vector{Int64}}}}}:\n [4, 8, 12]\n [5, 10, 15]\n [6, 12, 18]\n\n\n\n\n\n","category":"type"},{"location":"#LayeredArrays.@layered-Tuple{Int64, Any}","page":"Home","title":"LayeredArrays.@layered","text":"@layered expr\n@layered layer expr\n\nConstruct LayeredArray on layer (layere = 1 by default). This is equivalent to LayeredArray{layer}(expr).\n\nSee also LayeredArray.\n\nExamples\n\njulia> x = @layered [1,2,3]\n3-element LayeredVector{1, Int64, Vector{Int64}}:\n 1\n 2\n 3\n\njulia> y = @layered 2 [4,5,6]\n3-element LayeredVector{2, Int64, Vector{Int64}}:\n 4\n 5\n 6\n\njulia> x .* y\n3-element LazyLayeredVector{2, LazyLayeredVector{1, Int64, Base.Broadcast.Broadcasted{LayeredArrays.LayeredArrayStyle{1}, Nothing, typeof(*), Tuple{LayeredVector{1, Int64, Vector{Int64}}, Base.RefValue{Int64}}}}, Base.Broadcast.Broadcasted{LayeredArrays.LayeredArrayStyle{1}, Nothing, typeof(*), Tuple{Base.RefValue{LayeredVector{1, Int64, Vector{Int64}}}, LayeredVector{2, Int64, Vector{Int64}}}}}:\n [4, 8, 12]\n [5, 10, 15]\n [6, 12, 18]\n\n\n\n\n\n","category":"macro"}]
}