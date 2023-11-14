/**
 * Day 3 of Advent of Code 2022
 */

const input = `dWlhclDHdFvDCCDfFq
mGdZBZBwRGjZMFgvTvgtvv
jwwJrzdzGdSbGGnNlzWczHzPHPhn
cczcbMBszhzzDBTBPPPGjtvtlt
LqJLfpwdLnvQLRGQjGtj
gSgnSJJCGSGpGSrwgfhchmmmHzcrHDmbrmMm
bVjstCsSstCLCrbSLnMpdMndcLddcqcpHR
wPZJQJwtBfJZmgBwPTcpTdcnfHMppcGMdG
gmFJzwPJJtszvNhCNC
DmjZDMZWDqGRqqRpHmmRLTTNTPTfCQJQQLJHTClc
FtzfvrfFwVgtzztgBLJNcNlTcTVNNQLN
vgsdbzzrwtqWfWRpZDdZ
rJhqRhLHhdcQqdHqfQGfPGstgGPlWttM
DzCpDDmnNCmBZBZnVBmZzBGPfsbglfNPwgPGPMWsWWft
BZFnlmpBpBzDzVZmhFHFrrrchhRqTdrc
DWCCWFNqdGFdPVcb
HllttQsTRlJlsblrHlhdmPLVcVcTccndLvPLmL
HSlstHgJltghhRrzNBNDzSwMjNZwNb
dzGSHCWSsGVVSdHVHHWWVVDCgJDpQqLTTRJpgmTLRmJTTpTR
BvNjMPZMBtBBMvvNMNttlhLQqCJpLmhTRQqQJgRJLQQg
llNncBlMCwwMnwPZrGsVHzcfFGdHGFGs
JfZhphMMQmFzDTDjSdrQjQ
sqHCbCwBVtbqbCqtrWdjzlSJTlrTSWBn
bHcwbGCGRssNscwtHNbwvmRFvpFFJFvLZMmPLFfv
qBCrzznVmDCmMMDNgrgcrvHHcgbQcW
TTTsdJRTRhhlsgbvbdCFdbWvbQ
JhGGlfRlJsnCMDMqjmfV
rqLLvDLtStDLQhQDQrQhhNdsmWdmmjjnssPnTMnTzfTsWT
ZRFFpgCgppcBcnjTsjTMTfPFMP
GCZpGlwJwBgGHcJhSSHLDDrNqrMtNq
FsPFqsDNZFNnZrcBmWfWWQ
lSnRlRTvgrWtctTmft
SMbGbbvnGlnSDwGqLwNCqNVD
dPQDcBwJJDgDTPgGgQTBVjSsmLhLTrLmjSLpjSLh
MvvZRHtMtbCNvCNCNtNvbRfBSMSrjmLpjnjmVhrVSLsnnmSh
qHZtbBZfRztbHbCzNRHPQgJPJgGgglFPPFqdQD
MsBsVDspRPfPlhMl
zWnCFzHbSCwqNmPSjmGlsmfN
FnHnFbFzsHHCCgzCzbBptVppgvvVgVrpBrJt
pTLntptZjQLfVDjQTDlVJCSWNCPSCCsSNmFlNslm
BBHbqGHHqgwSWSCCWwZWWZ
qRzbhhbzzrHdRRHhRHvzZjfrVTrppVQttDfcQTfp
DHsdHPHHsHMsRmhMZZQBtljgZGtC
NFnCbFznLVJbVrjhQthjGBLZBjGL
wNrfFJJbCpNnfbdwDSDHsvsHmsmH
jLZRjnMMjJhJnvtQbdHfHZbvHQ
mBzwptCWlcFCwsHSTpQfQHQfrpTb
mNltzmsCNmFzGwCBllGRgRgqjgLMnGqjnPjV
ZqqcqmVVtbcBMFfFMcQfgphJ
HLWLDvWjjLwTWzzvGLThQQshQllgJDJgfbffJQ
vHzLvrwwzGzTRGzzLLRPRwRdSVdnBBdSbBSVStbNmnrmZS
TWVVvPSgwWSqcRgRwbRRcqshsfFzzzChTGNHzHhhhCsG
njZrjMLlpmDmGfSGtrNttzCF
ZQBmZdDBZRRPRSBgcb
TpntvdpnZDptnbnTDGtSFSlFmzCzzmSFRjqlZj
MWrNcWRMlgqzMjzq
NPwsPNrBNcVHNNcJHBNBcJwwttDvGVnDptVRtbnTtGvVGtGG
tsbbvvSfnqvzQLLBjfMLdd
gJRmRNmJNchgmmrFJhFgWJQMwBnjwrMBVQwQTBdLdVQj
GcGpGGRGJgqstvpbnCqb
rsHcrbZHBTTtLtNSwwHLLJ
mFqhWVsjsVCjQlNJGMwMlMMGMh
QggzffQRCfgVFWzzCQffqfZpZDcRvTTBTvvZnsdnddcn
bPFMFFBpMlFfMZMpHGNSrNctJcPSSchJchPt
zCgwnmgzQDnQgdWWQRgqSrqLSqSgssLNJhgJ
rQCQQTrRRmDBFfbHBFHZbT
fzfPQsGrrMMjtHtBHs
SwNNDqwhWpVTwbDGGDmwSVhZRZHdbCtgBjCRjMtbBHtRMd
vVTGvVGNvPPvQvfncJ
cwzMJbclHDPqfJQPfq
rrqjjTBrqqBjRCgTjrRjNrsGPDhDFGCfWGfPFfFPGWfD
BZTTSTZgjbSwVptvpq
PPPPJpvpJsJwPHHPsJdTNZRZZZjTFFmRRRNjZd
qbWVfChDCDnVVDGfnSFNNjRLmNfBNLQjLjmBRm
DhFDhbnWCDhGcbJPPwrsrMwrvlvc
lFSDTwHTSwlTNwFFlwNcFFpjLZvZqvnqLPnnWbgngbbncqbZ
rzQfMzRGrRGJCffBMGdGsJZWWnqWVqdPPgNvvVZWPWWn
RJrttBtNQCsNzTpShhHFDwFlth
QNzQFjNFrQPNbmPpqTTDGswWmB
ggHRcSlcCVCSzMVqDGwgqTWpsmqwqG
cltzCZtLClHRRtMZZLQjfNvtrJfhvrddvNNd
mcfWHffBFnQRQlTFdv
wssSLVbbzDVbzbggzSzNshNMnvnljRdvQRlMBjvQdnCj
bhDzVSSJDDJhDLBwtbDzzbbWppfpcmWGmprqqGtqprcHPp
rpVFrZpgHWSZrFPqhzwcqPwmcVBD
vMTnQJjQLCbljvvQzTMbTjPNdBLwwDhmhNNqPwmmhhBh
jvGjjQJnrspGHgFz
sjssjtZlcphZHwWvcrHTwWJH
qDdzzrFNNNDGdFDzzVBVVvfWJPfgPmgWPgvwVH
nqMQGDrnLGnqqLNqjtCZZjsMhZhCMbtl
JJJsLFmzsrFlSpzPscjgHhnRnmvcjqRvvj
fCMQbCbTjjqTGhjc
bfdbWdCddfBbtCfbfbqVWQQpPlBrJLJJSSLwppFssFzLzp
pdbbzlffWtJbgQwhcphQcCCg
vHvLFvVLvSfFRLnRFRNHjPjggcssQcjjsnwhsPCC
vGVGGFFVHLTvDRHDmBbTzfZWMdJZlfMm
wjCbjQgjTQhNNzgWQCWrDFMZmZDZDCrrMDpLpL
czGSPznnRGGJGGlVVRVBGGlBmDDcMDFDDZLqfffZFrrZqFpZ
JPGlvBSJHVGnVsjvQjjzwdwjzd
MFlWQHDTpnpsFNNQllWFWlhzjGgrgDzGGhGGjvmZDZrh
PtTPcTLbBCVPTRVcvhjmmhVhSZGGgvZg
JLPfCwPbTbBPJCfblplMpqWsMpMwWHQn
QbHVBBzWtzHBNtBwQSgqhqSbFgRLjhmqqj
ZnCnMcdsDnJTncggFJwRmSwgRFmL
sTMZpGDvsZcMpcvTCPHwzrfzrpzHpWBrWz
PMdJWwJWHFWJnNzbDlfbCfMvbl
rZgttrFptFFcBtccbbCDvgfbGCGGgGDz
QsZBmsrFscrVrjQJjJQRJWWLwq
GwNNJwwRThwrWfhh
SmQqmzsjHssQzCbvsmSSzsQTjWpFTTfFfThchhFTBBfppB
mmbHbmtmCzzQZzQRdZJhNMdMlRMglh
rrsPbncQvvgnnrTdGDVcCdpZHHZp
RwwwhjLLqtJFwjzwtwmwwGpDZVdGDVdZBZDFHdHZCp
zhzwLhhfffLtjNChgWbbrbnMvPrMrrfv
tQMtQtTSBFtSmQSttMggMtbtnTnPrZvrnzNNTGZvrZZdLdnL
HqhwDpDcwlHqpVrrFzvFGpZrrzrP
RwlhhjwRCjVfjDbMtFWBWJMgWjWm
WpWVlWzsGlBJpspNclNlhhhmgzrdtzQMQttzMmtt
RfnPRLTPDHRdPbwvvntnSrFgmvnmtm
CwqRDCCwqCwbCTqJcJBNcZqdVcBlpJ
tpfnNBsGGNRppRCgfgRRCRQJGMPPWdwMJdWFFwjVzGPJ
chLSchLTbLqvqcZLlvvLqbmldMzFFWdzVSFWFMzQVJwjQjdM
rLqqcjDrcvhRsDfHDtNNnN
DjZjvTTDqrtTZZSMcdRdmRJrcJNc
HWgPGVhFPgnSVtnJcdMs
FPLfBwCWGPfCwfLHCCDBZlbDpBjvqTtDzzDj
FJNqNFgNFssqGGqBsTlMVcgVrCwLwlhcrw
fRZzDmDZvvDdZbtdpDZmbrThrLMCvcChwwlSTrvMSr
zmfZmtZmpDmbfWRDDZdqFljqnNQjGWnsjFqGsG
rMdMWddmJmvdSdmWfWMddpVRqRFVHRRqMRRPQMRqRq
tDGtGGhLjLLZNLjjNgNthGtqHTVqRVVpPDRpHHVRQVRPPR
ZlLtzNjgsZZlssLgtjNpfWfJvlJrrvCJfBmBfn
hqpWvFJsJFNHhqMWNhWvWRmmDcDMLcwZnjcwnjRnjn
LdrlgCCrSSTrTnwRjmwRQZwdwG
PVlfClrLlLlfggtBPzHHhHFbWzJNbvqJFNqF
TbbQtnDtbGGjGlGsGHpJJmFWFJJrBWWFlWrS
CZzzNzzhddNchhMhhRVjpCBwBrCvJvpmSCvrwJ
fhZZhddRjRgZzMZRzPjPTsLGQtHLTHTbDPQTtqPT
nHnWsQNQQWTWQshwjBJJJmHwFBwm
VZZpfbffZVvbSbGfBhSwmtmmJlmjJFJJ
bpphpMfMvMzDbMGZgQNrrngzdTsNqWdd
VPNddVTPPmdnVcPVZcdTmcDbQTFjMpjtFzbMtFjzsFTssT
lJCllWCrgvRlgwlJfRRvSzjSjQpbzMHpbwMQpszM
fRhGBBJJCgrNLsNPNVVhNq
pLrVDgbNbjVplpsltHBqWSqhSQcHDttH
MCdCwCGTmnTmmmvTTCwCqNhHQhRWcwHWBRHSqSQH
TNTFFPfffTvFTJvTPCPTFfGdzVjspVLZglJbsbZpVblrzjlb
cdPzFrldgcdCrnlznPzrBNRssLLBbVNVZsLHRHdm
wTQQwvvtqwqcGvTZmVHBbVLLBbRV
GWJSGfJWcjQwhQQWjqJhhGfgpMnMzDnpMlPpMnDlMrzl
pMhqTTsSpdBPpNBshsdMMTQFvFlQtQWCRQlCllVFqVqG
dfcbnmrnjzRFvGQQGvfv
mDrjLLLcJjLhpZSSJMdpph
NGZNwqFqZhhcFSCfRzwdzRfCzVRw
QTTmBTsWQWJPPCvzvpHPzdvVFR
bsmWTBbQDbmbLQQMsWWQchgqLqhGGGGZLhSFjhqS
HgmGlgsvBBDgBGCdHHvHwCGwhZJWhTjSdhTSFFFhJtSJTJhT
RQfVrfQNszMQfpMzpNnfLbtjhtSbWJWFWtFFtFJtFSZq
PNzLfnLnBCPHgsgC
mTZGgCdNSNmCQLLpPnDhRlGhpV
vWJHWFsfHMWBBFbBsjfjHrFfLRRLPPnpLthttRVPLSnhSPbS
fzMrBjWfBrzsZCZmSTgQzcNN
mgmCZCMgmnZmZgBZpgpJfbQfwSQPDTdfdwSDfwhn
sHhcrWLcFlzHcHRNNFvNFcFPwDDTWdddDdqWbSTWDPTTQS
RNsslsRrNcRNvNRFFNvVsghZBJtVCCtCtGghjhGBGG
gchrcRRdnRwPPnvQ
CVCCSrDjFHjVDbBLFGGBSvwnwNMnMsPPNsNPvwPQVM
lHLCTHGDCbbjFTTzdWlpcqfgcrdzZg
fRDPsDsqqJttttJSzPDgJWQCbQQbGMWCCnGGPVGVQQ
rTTBvZhrvBnWWDWCbZWW
cwLlTLpjTwBFLLhgfRRfmRqRDmRdjq
sprGGPTrJTsGPzszqGzNtTtpfbQddQSQSDFDFvvbZvwFbbfN
LWWCMVmwMmgWFQfFDDvZDgdF
mlMmRVCWVMmmHRjVCmjHWRhMzpTtlrlPzrtzwlsGPrpwtrJp
tsfwwfjfdfrtrClfvwvvLnTHNmvLHcNccRNcvNWH
qQSqZqFQRBzghDFncHgmccHNmWcNmM
SQJphFJzRDSsdpVlllrCrw
vGQqLQFvBvLvdNnvjnvNDc
TRJwmWmZWlCCmzznbNhhbDhRgj
CCTtDTlmDTWTmDmZZlVLLsFfstfFFLsBLQfF
cfWflMmWWlWfPWBhBlQtLmmvrrrvCLjvRTjLLwwr
gSgbsbgHdsjzHbqbdVDLZLvTZwLTvSrZrFvZLw
sdbJqDNdjJNdsJBpBWpJlMcfcB
FHlMHPqDLlPctgHSnttCSC
zhrmBrTwJTjBmQcSQvQqbtwGvg
jBjmBmJjjjRZTBzhhrBJLDdZqfpDMdfWWlDDLMlV
zPVdbsBzZdwqJGhrLTvNNJqH
tmmCgCPCDDnptHDjNvGvhrDvLv
pRWRlpSpPllClnpbQVQwFFVSQFVBZz
nDrCvmvMnMSmsCvblBzzCZplbJlTbZ
FNRtFWRfcGqFGQbzlZTQqQTBbd
GRwFfNtwFRNFGMvBsnnwMMMBjn
LVTBjjlJCDrnJzJNQR
GsGGsggGpfhgpchgdqzbMzzhzQRnnMRrNzzR
PwWFqFGpwWpdWgfsGggdmjCVHPHlCCCVZNCjVmVj
qVTsCWwbCsPlCVfcbvfPDgLzbzDDhrzRrjgZghgr
ntmHmNpSQNGtntNttmSdSdBdjrrDLQZQLLhRrFFFRDTFZhDF
mtMtBNTSNBpNJStMGSdHppNcVWPsWvqVcsVJfwwqlqWqlc
vvWzLvvdpZDvhTpcrLcTTLpdwSPnCfJwCMnQSMwSnCGJrnwr
ttHVmVNNsHBBRsHbMMwwnjnjBfjJwCMP
tsVllgNVqbRlfplldDvDWT
mLjLsQqLQqsBRvvlRBLRlT
bhgtDDhCtmptmTTS
nfmdbggwGWrfsPzfWq
JpWDcSGJpGzsHPSSlbbd
wVRqVZwwRwPDwbDddH
VtVVVLthLVtVgfQLRTNtqDcCcJBmmWMWWprpFrcBJWNp
dhhhDtmLdttdPlslGlRFjfzBBpzzRpGJ
QMrVMwbVrrbvVVCrvcnqQQrrSMBJfpjFSzfjJFMFRWSpjjFG
cwvbHHbCqVchRDHgDsPTdt
CgVNCtDsDtJGZZGqMMGhDq
cLRnSHgWcRdLHWSSRLjQdlHBTTPcPwwhzqzTMBPTwhPPwP
HnnnglnWWgdRjlmQNsNFmJCFJFvsJsNN
hfccLbjhfSRbfDZjFRJzrlvlwwlnnFrWwzqr
TCsPLNtQdpdQQVtVNvJNJWlzJzwlrvJl
pHtPsPtPtCQfbRHHDHhMLh
nWRWgLtWnfTcZNNsscfd
JMGzMVJwMVTvzVQFGHMMmPdddsPsCjldlHPcScNPsP
vGrMQQmmvTQzMJpghWRWgpbbBqLbLR
WSbhFbPTpRfTfPdhpfbhSbfPQLzlQlzlHvtQsvlltlsgHdgQ
pZcGJDZNGcVrJwrDrrnvtNvlNzsgtgzvvsgt
qmJZZJcBqwrMJcVbWfSPPWpmpjmSCF
jHVjjCcpNrDgjsfB
ndqllRvJQtqlQQTRWllFNDrsMZBfDBLvNMNDfsbZ
qTFnWJqdWRdqWRlnTRnQGnTmwwSHCzpcGNmHNcPVcHGmCz
pZCpBhDfvgBVZQGMMVZVlq
sLsLTTSssjPnTNbFGRGFPVHqMMRF
TsNSccnjLdcsLjdmjWvWvBhfmvWpCGhGhD
VWFFFPMpPVSMbTppHTnHTbRH
DtvfNdBNddDNSLjsvDTTHnzzHwrTrwsrwqbT
dgBLNffdgjjtfBQSvgNjNDlvMcQJmJJmZCMmVVVZFPFcPMGG
VWsQLHMVVSNRShWLhNSNLjbbbddbpDZDddcbZdDRztpd
FPlhhgPvThGFJndnnCCnJzzdCp
qrTfmllGvfvGqwNMMMsffsQsNh
NsmFqNlmnQRbCFsmJgSffpPcbvSfrVvpgS
LhZGDZhhwtDHMwDdHGhDjDpTzzPdzgTvcPvpSSpPrdrv
jgHMjBLhwtZMHMHmJNNJNFlBqlBJNn
bznSQggscgMcSTTfJbSQzQFwClMhmCmthClvMwFLwhZL
BRWBPBVVPjPNVHpVqlqrvtwFqmmLqltZmL
WDVddNHNvRgccgsDsgbT
sNgnQLtLLLPPnsPpqdqjBclpGWjcWjBG
rVCChSZhVrrwqVDVHSHmMjldGfJGfHddJGJlfGjGJj
CVZmDvZCmmhFVVrCgTNbbnQFgbsqNqNQ
WmMmSSfJNRRPfJRMRMtllCgdStgbgttgCdDd
QGBrvzwBczlgqCtDbvDq
QQpBGFrLQjQzGVVRNjPmNNWMbW
gGljnJhnJtllpNVCHWcccdTdjdmB
bLfSQDSMSHmBnwCB
LFMDrbFfFQZQRzLZnbgtlsRGtltpgNhgPpPG
cRThZZchCThtgTRhZTRtjWFjWNwqCjGmwFjqqffC
DPDPGzPMHDbrpqjfwrjqmjmp
JVHHDdVdVbvGMdnVdQVdDbHcRZllhRtgStRLThRSTcBTvc
lQWPSBrrPZGgPglGssDfHnWsfDFHHvHh
TDCqpttptJNLtwNpbwTqzqHshsvsMMFnmHMNfssmvmvf
JCjqVpDtrBjQjrlj
wFGWGpFLvCczNSWWsz
tlfgtftjlbtHHlDBsBzmQQnsQDQsCn
gjfrsVqVgPlfqhvLdvdwZhGq
pHpZHBSvRvRCBBZCTMngRnWndnRmWcgg
jsfrfrjJFDwDDMMggMCGWGcfmG
qbCszCjtCjQsQrtZVBHBHvBvqLZvlp
scFzsPScNgNPNgQzpttlCBCwpLrMLCrDdljLwq
TjfGZZjVwMZwMLwr
vnGbWTvTmFRjQFQPsb
bVLrzqrzJVgJbbtVrWJVgppcBCzBvdzwBCCBHDcBvc
hflPQnMQmQSRlQMPNRTHwwHHHqpHpdfwdBCp
hFhZMhqSNMNbrZgWWGWJjZ
NJsgNjJlMHQrwnRgSRPwrP
tqpQtTFpFvbGpzTTWSrnSbrhwChCnRfrCf
GtcvGqQpttzcqdFzWppDsZMJjBBsBJcBNmBjMsLJ
lGfZGZhFfhdSWqmFFWSS
wDRDPLcDnjtWbSmqrSCSLC
MPwmtVnVMjztznHPgQhQfJfvvHHGggQZ
llTspLllCHmLHHndldqHdlLQQPSBQczZSFDDQZSNGcGG
jMhwvVrRjbRhFBZNGPcGNN
wVtrrtRwrfrwftjVjwWvMrRpsqsnsHsBglslCmTsdWdHTd
vPvmTGgDPRvGpDPGPqGHQnWJQJMBBzJBlBQWlHWl
bfbwNsmwFdLjbfrrLsSfLNQtMllznBzJQZMQtMlZZnnF
frssSscssNfScCjfSCwjsDmRDpGmDRDvvvVcvRDvRp
LtlPZPjBTbWsWJVJVzdT
nnprqhrqmzfrSrphqfCChVVGVDJWgSHHWgWsRDVHWd
nrmppNqhcCrfMchcMCncqbzPZvlvlwbBNjPjtNjZjL
FPWsFdSspVbbbtWVvl
CCHnnfHHvCwtVMhzlzDllC
LrGnjGfgfvcwfgrLrBjrBLgwdBTSRBFsRZdRsSqFFSFSSPPp
whGCLqsrjgGhhGFqrCCFGCGzTRTZJcNnzlLTnznNHcnzTH
ddvVmbfvdvVbDVQdvvdSzpNcnJzlzSRHNJpnJcSc
BPdvfQdWtPDDPfDvDQVVPmbhssCGGMqgFCFMqGMWgMjrRw
PSLbGmWPSPLQbMTPWGFWltthdDdrmBDHhdDdczzDRh
VfCngVfgsZwCftrZdhcZrdNDzz
CjVJJJqnJwQhWPPLQlGj
ntnnQmTQTQGVWGNGNNlClG
jDffjMSvqjHzHHzwNVwNVcCddPVNdD
ZszJsrrZMjsHqqvZJLRQCbTRQbJmThbt
BgLHgFDsJNWgQgflWd
mnVVcCHnCGRcVnZSjmlthftMQddlfhQctNfW
qbSGqmHSTFprvpvTTL
dvdTMvvpdLpTcSLvdLLMmhfFBftwCNhRwRNjtCTRCf
lshQWgsgrHHqlFfRqFjRFfFwCB
rsgHQbJbrsGHHlgQHgJrlHrPZdhdpMZGDSDpdPLcZhdvhZ`;

// take ascii code,

/************************************ Part 1 ********************************************/

// split each line of the input into an array
const luggage = input.split("\n");

// check the length, then split it into 2 equal halves
function splitUp(array) {
  divider = array.length / 2;
  compOne = array.slice(0, divider);
  compTwo = array.slice(divider);
  return [compOne, compTwo];
}

// find the common item of the two backpack halves
function findCommonItem(array) {
  compOne = Array.from(array[0]);
  compTwo = Array.from(array[1]);
  let commonItems = "";
  compOne.forEach(letter => {
    if (compTwo.includes(letter) && !commonItems.includes(letter)) {
      commonItems += letter;
    }
  });
  return commonItems;
}

// if found, look up ASCII code
// if ascii is  < 91 (uppercase), priority value is ascii code - 38
// if ascii is > 96 (lowercase), priority value is ascii code - 96
function findItemPriority(commonItem) {
  itemAscii = commonItem.charCodeAt(0);
  priorityValue = itemAscii > 96 ? itemAscii - 96 : itemAscii - 38;
  return priorityValue;
}

// take each item, split it in two halves, check for common denominator
function sortBackPack(array) {
  let totalPriority = 0;
  array.map(item => {
    splitArray = splitUp(item);
    commonItem = findCommonItem(splitArray);
    itemPriority = findItemPriority(commonItem);
    // take priority value and add to running value counter
    totalPriority += itemPriority;
  });
  return totalPriority;
}

// console.log(sortBackPack(luggage));

/************************************ Part 2 ********************************************/

// run the score of the returned letters.

// take the array, and transfer each three items into a subarray
function createElvesGroups(array) {
  let groupedElves = [];
  for (i = 0; i < array.length - 2; i += 3) {
    let subarray = array.slice(i, i + 3);
    groupedElves.push(subarray);
  }
  return groupedElves;
}

// go through the subarray, take a letter from the first line, and check if it exists in the second, and third line. Return the letter that fulfills both conditions
function findCommonBadge(array) {
  packOne = Array.from(array[0]);
  packTwo = Array.from(array[1]);
  packThree = Array.from(array[2]);
  let commonBadge = "";
  packOne.forEach(letter => {
    if (
      packTwo.includes(letter) &&
      packThree.includes(letter) &&
      !commonBadge.includes(letter)
    ) {
      commonBadge += letter;
    }
  });
  return commonBadge;
}

function findBadgePriority(badge) {
  let priorityValue = 0;
  for (letter of badge) {
    letterAscii = letter.charCodeAt(0);
    currValue = letterAscii > 96 ? letterAscii - 96 : letterAscii - 38;
    priorityValue += currValue;
  }

  return priorityValue;
}

function calcBadges(array) {
  let totalPriority = 0;
  let groupedElves = createElvesGroups(array);
  groupedElves.forEach(item => {
    commonBadge = findCommonBadge(item);
    console.log(commonBadge);
    groupPriority = findBadgePriority(commonBadge);
    totalPriority += groupPriority;
  });
  return totalPriority;
}

console.log(calcBadges(luggage));
