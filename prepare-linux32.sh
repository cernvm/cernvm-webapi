#!/bin/bash
BUILDDIR=build_linux_32
[ ! -d $BUILDDIR ] && mkdir $BUILDDIR
cd $BUILDDIR
cmake .. -DSYSTEM_OPENSSL=ON -DCMAKE_BUILD_TYPE=Release -DCRASH_REPORTING=ON -DTARGET_ARCH="i386" $*